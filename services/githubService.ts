
import { GITHUB_CONFIG } from '../constants';
import { Project, MediaItem, BlogPost } from '../types';

interface GithubIssue {
  id: number;
  title: string;
  body: string;
  labels: { name: string }[];
}

// Helper to extract JSON frontmatter from Markdown body
// Expected format in Issue Body:
// ```json
// { "key": "value" }
// ```
// Your text content here...
const parseIssueBody = (body: string) => {
  const jsonRegex = /```json\s*([\s\S]*?)\s*```/;
  const match = body.match(jsonRegex);
  
  let metadata: any = {};
  let content = body;

  if (match) {
    try {
      metadata = JSON.parse(match[1]);
      // Remove the JSON block from the content to get the "description/reflection" part
      content = body.replace(match[0], '').trim();
    } catch (e) {
      console.error("Failed to parse JSON in issue body", e);
    }
  }

  return { metadata, content };
};

export const fetchContentFromGithub = async (label: string): Promise<any[]> => {
  const { username, repo } = GITHUB_CONFIG;
  
  if (!username || !repo) return [];

  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo}/issues?labels=${label}&state=open`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch from GitHub');
    }

    const issues: GithubIssue[] = await response.json();

    return issues.map(issue => {
      const { metadata, content } = parseIssueBody(issue.body);
      
      // Map based on label type to our internal types
      // The Issue Title is always mapped to the 'title' field
      // The Markdown Content (minus JSON) is mapped to the main text field (description, comment, etc)
      
      if (label === 'project') {
        return {
          id: String(issue.id),
          title: issue.title,
          description: metadata.description || '', // Short description from JSON
          impact: metadata.impact || '',
          techStack: metadata.techStack || [],
          highlights: metadata.highlights || [],
          reflection: content // The main body text is the reflection
        } as Project;
      } 
      
      else if (['movie', 'book', 'series', 'podcast'].includes(label)) {
        return {
          id: String(issue.id),
          title: issue.title,
          subtitle: metadata.subtitle,
          quote: metadata.quote,
          link: metadata.link,
          type: label,
          comment: content // The main body text is the comment
        } as MediaItem;
      }
      
      else if (label === 'blog') {
        return {
          id: String(issue.id),
          title: issue.title,
          tags: metadata.tags || [],
          summary: content // For blog list, we show the summary (or full body)
        } as BlogPost;
      }

      return null;
    }).filter(item => item !== null);

  } catch (error) {
    console.error(`Error fetching ${label} from GitHub:`, error);
    return [];
  }
};
