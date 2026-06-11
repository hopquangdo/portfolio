/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isUserSite = repoName?.endsWith(".github.io")
const basePath = isGithubPages && !isUserSite && repoName ? `/${repoName}` : ""

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
