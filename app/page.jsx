import Balancer from "react-wrap-balancer";

import config from "@/config/config";
import { getAllPosts } from "@/lib/content";
import Article from "@/components/cards/ArticleCard";
import { SpotifyPlayer } from "@/components/cards/NowPlaying";
import { GitHubActivity } from "@/components/cards/GitHubCard";
import Stack from "@/components/cards/StackCard";
import StackProject from "@/components/cards/project/CardHome";
import Resume from "@/components/cards/resume/ResumeCard";
import { StatusWork } from "@/components/sections/StatusWork";
import BlogSection from "@/components/sections/BlogSection";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import BlurTitle from "@/components/ui/BlurTitle";
import DecryptedText from "@/components/ui/DecryptedText";

export default function Home() {
  const isAvailable = true;
  const allPosts = getAllPosts();

  return (
    <>
      <Container className="mt-16 sm:mt-16">
        <div className="max-w-3xl">
          <StatusWork isAvailable={isAvailable} />
          <Balancer className="mt-2 text-base text-neutral-700 dark:text-white/80">
            <BlurTitle delay={100}>
              <DecryptedText
                text={config.name}
                className="text-5xl lg:text-8xl text-neutral-900 font-fustat font-extrabold dark:text-white"
                encryptedClassName="text-5xl lg:text-8xl text-neutral-500 font-fustat font-extrabold dark:text-neutral-700"
                parentClassName=""
                animateOn="view"
                sequential={true}
                speed={60}
                revealDirection="start"
              />
            </BlurTitle>
            <BlurTitle delay={250}>
              <DecryptedText
                text={config.description}
                className="text-sm md:text-base dark:text-grey-400 font-mono m-0"
                encryptedClassName="text-sm md:text-base text-neutral-500 font-mono m-0"
                parentClassName=""
                animateOn="view"
                sequential={true}
                speed={20}
                revealDirection="start"
              />
            </BlurTitle>
          </Balancer>
          <BlurTitle delay={300}>
            <SocialLinks />
          </BlurTitle>
        </div>
      </Container>

      <BlurTitle delay={500}>
        <Container className="mt-16">
          <div className="grid grid-cols-6 gap-4 mb-2 text-left">
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

            {/* Resume */}
            <Resume className="relative col-span-6 gap-2 h-80 sm:col-span-3 md:col-span-3 lg:col-span-3" />

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
      </BlurTitle>
    </>
  );
}
