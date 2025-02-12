import type { MetaFunction } from '@remix-run/node';
import * as stylex from '@stylexjs/stylex';
import '../home.css';

//..
const styles = stylex.create({
  container: {
    fontFamily:
      '"Reddit Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    maxWidth: '680px',
    margin: '0 auto',
    marginTop: 100,
  },
});

export const meta: MetaFunction = () => {
  return [
    { title: 'Mo Rajabi' },
    {
      name: 'description',
      content: 'Co-Founder and CEO at Inline chat company.',
    },
  ];
};

export default function Index() {
  return (
    <main {...stylex.props(styles.container)}>
      <ul>
        <li>
          <strong>
            <h1>Mo Rajabi</h1>
          </strong>
        </li>
        <li>
          Co-founder and CEO at <a href="https://inline.chat">Inline</a>, the
          chat company.
        </li>

        <li>
          Previously:
          <ul>
            <li>
              Founded <a href="https://noor.to">Noor</a>, a virtual office and
              chat app for remote teams where I created our own{' '}
              <a href="https://github.com/inline-chat/webrtc-client-rust">
                Rust WebRTC client stack
              </a>{' '}
              instead of using libWebRTC.
            </li>
            <li>
              Made <a href="https://there.pm">There</a>, used by +17k people
              including from Shopify, Apple, Amazon, and Google
            </li>
            <li>
              Co-hosted{' '}
              <a href="https://www.graphql-europe.org/">GraphQL Europe 2018</a>
            </li>
            <li>
              <a href="https://pioneer.app/founders/mohamad-rajabifard">
                Pioneer
              </a>{' '}
              alumni
            </li>
          </ul>
        </li>
        <li>
          Public appearances:
          <ul>
            <li>
              <a href="https://crabnebula.dev/blog/interview-with-mo/">
                Interview with Crabnebula
              </a>
              , 2024
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=rmrDT038cJM">
                Presenting to Des Traynor
              </a>{' '}
              at Pioneer Demo Livestream 2020
            </li>
            <li>
              <a href="https://x.com/webdeldn/status/940665138352394242">
                Lightning talk
              </a>{' '}
              at WEBdeLDN meetup in 2017 (
              <a href="https://medium.com/@morajabi/story-of-a-developer-from-iran-to-europe-open-source-story-196a6323be5d">
                written version
              </a>
              )
            </li>
          </ul>
        </li>

        <li>
          @morajabi on <a href="https://x.com/morajabi">X (Twitter)</a> and{' '}
          <a href="https://github.com/morajabi">GitHub</a>
        </li>
        <li>mo@inline.chat</li>
      </ul>
    </main>
  );
}

/* <a
href="https://github.com/dena-sohrabi/There"
target="_blank"
rel="noopener noreferrer"
{...stylex.props(styles.socialLink)}
>
GitHub
</a> */
