import { createFileRoute } from "@tanstack/react-router";
import config from "@/config/config";
import Article from "@/components/cards/ArticleCard";
import { SpotifyPlayer } from "@/components/cards/NowPlaying";
import { GitHubActivity } from "@/components/cards/GitHubCard";
import Stack from "@/components/cards/StackCard";
import StackProject from "@/components/cards/project/CardHome";
import Resume from "@/components/cards/resume/ResumeCard";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import BlurTitle from "@/components/ui/BlurTitle";
import DecryptedText from "@/components/ui/DecryptedText";
import { createServerFn } from "@tanstack/react-start";

const fetchPosts = createServerFn().handler(async () => {
  const { getAllPosts } = await import("@/lib/server/content");
  return getAllPosts();
});

export const Route = createFileRoute("/")({
  loader: () => fetchPosts(),
  component: Home,
});

function Home() {
  const allPosts = Route.useLoaderData();
  const isAvailable = true;

  return (
    <>
      <Container className="mt-16 sm:mt-16">
        <div className="max-w-3xl drop-shadow-[0_10px_35px_rgba(0,0,0,0.7)]">

          <BlurTitle delay={75}>
            <DecryptedText
              text={config.name}
              className="text-6xl md:text-8xl lg:text-9xl font-InstrumentSerif leading-none tracking-tight text-shine"
              encryptedClassName="text-6xl md:text-8xl lg:text-9xl text-zinc-600 font-InstrumentSerif leading-none tracking-tight"
              parentClassName=""
              animateOn="view"
              sequential={true}
              speed={24}
            />
          </BlurTitle>
          <BlurTitle delay={100} className="-mt-2">
            <DecryptedText
              text={config.description}
              className="text-base md:text-lg text-zinc-100 font-pixel leading-relaxed m-0"
              encryptedClassName="text-base md:text-lg text-zinc-400 font-pixel leading-relaxed m-0"
              parentClassName=""
              animateOn="view"
              sequential={true}
              speed={10}
              revealDirection="start"
            />
          </BlurTitle>
          <BlurTitle delay={300} className="mt-3">
            <SocialLinks />
          </BlurTitle>
        </div>
      </Container>

      <BlurTitle delay={50}>
        <Container className="mt-16">
          <div className="grid grid-cols-6 gap-4 mb-2 text-left">
            {/* Resume */}
            <Resume className="relative col-span-6 gap-2 h-80 sm:col-span-3 md:col-span-3 lg:col-span-3" />

            {/* Featured Article */}
            {allPosts
              .sort(
                (a, b) =>
                  new Date(b.publishedAt).getTime() -
                  new Date(a.publishedAt).getTime(),
              )
              .slice(0, 1)
              .map((post) => (
                <Article
                  key={post.slug}
                  post={post}
                  home={true}
                  className="overflow-hidden relative col-span-6 h-80 sm:col-span-3 md:col-span-3 lg:col-span-3"
                />
              ))}

            {/* Projects */}
            <StackProject className="overflow-hidden relative col-span-6 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2" />

            {/* Spotify & Github */}
            <div className="grid relative col-span-6 grid-rows-3 gap-4 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2">
              <SpotifyPlayer />
              <GitHubActivity username="a04k" className="row-span-2" />
            </div>

            {/* Stack */}
            <Stack className="relative col-span-6 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2" />
          </div>
        </Container>

        {/* Blog Section */}
        <Container className="mt-24">
          <BlogSection posts={allPosts} />
        </Container>

        <ContactSection />
      </BlurTitle>
    </>
  );
}
