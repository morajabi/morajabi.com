import type { MetaFunction } from '@remix-run/node';
import * as stylex from '@stylexjs/stylex';
import '../home.css';

const styles = stylex.create({
  container: {
    fontFamily:
      '"Reddit Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    maxWidth: '680px',
    margin: '0 auto',
    paddingTop: 100,
    paddingBottom: 64,
    paddingInline: 16,
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
          <h1>Mo Rajabi</h1>
        </li>
        <li>
          Co-founder and CEO at <a href="https://inline.chat">Inline</a>, the
          chat company (
          <a href="https://github.com/inline-chat/inline">source</a>).
        </li>

        <li>
          Previously:
          <ul>
            <li>
              Co-founded <a href="https://noor.to">Noor</a>, a virtual office
              and chat app for remote teams where I created our own{' '}
              <a href="https://github.com/inline-chat/webrtc-client-rust">
                Rust WebRTC client stack
              </a>{' '}
              instead of using libWebRTC.
            </li>
            <li>
              Made <a href="https://there.pm">There</a>, used by 17k+ people,
              including at Apple, Google, Amazon and Shopify
            </li>
            <li>
              Co-hosted{' '}
              <a href="https://web.archive.org/web/20181217173949/https://www.graphql-europe.org/team/">
                GraphQL Europe 2018
              </a>
            </li>
            <li>
              <a href="https://pioneer.app">Pioneer</a> alumni (
              <a href="https://techcrunch.com/2020/02/19/ex-yc-partner-daniel-gross-rethinks-the-accelerator/">
                TechCrunch
              </a>
              )
            </li>
          </ul>
        </li>
        <li>
          Public appearances:
          <ul>
            <li>
              <a href="https://crabnebula.dev/blog/interview-with-mo/">
                Interview with CrabNebula
              </a>
              , 2024 (
              <a href="https://www.youtube.com/watch?v=oO40BwhlGiY">video</a>)
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
              ,{' '}
              <a href="https://github.com/morajabi/dev-story-slidedeck">
                slides
              </a>
              )
            </li>
          </ul>
        </li>

        <li>
          @morajabi on <a href="https://x.com/morajabi">X (Twitter)</a> and{' '}
          <a href="https://github.com/morajabi">GitHub</a>
        </li>
        <li>
          <a href="mailto:mo@inline.chat">mo@inline.chat</a>
        </li>
      </ul>
    </main>
  );
}
