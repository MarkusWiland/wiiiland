import { octokit } from '@/lib/github'
import { Section } from '../common/sections/section'
import { cn } from '@/lib/utils'

export const Feed = async () => {
  const activity = await octokit.rest.activity.listPublicEventsForUser({
    username: 'MarkusWiland',
    per_page: 15,
  })
  console.log('activity', activity.data)
  return (
    <Section
      className={cn(
        'text-muted-foreground relative flex flex-col gap-2 p-6 font-mono text-xs',
        'sm:px-8 sm:text-sm',
      )}
    >
      {activity.data.slice(0, 10).map((event, index) => (
        <div key={index} className="border-b border-gray-300 p-2">
          <strong>{event.type}</strong>
          {event.type === 'PushEvent' && 'commits' in event.payload ? (
            <ul className="mt-2 list-disc pl-4">
              {(event.payload as {
                commits: Array<{ author: { name: string }; message: string }>
              }).commits.map((commit, i) => (
                <li key={i} className="text-muted-foreground">
                  <span className="font-bold">{commit.author.name}:</span>{' '}
                  {commit.message}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Not a push event</p>
          )}
        </div>
      ))}

      <div className="to-background absolute right-0 bottom-6 left-0 z-10 h-40 bg-linear-to-b from-transparent" />
    </Section>
  )
}
