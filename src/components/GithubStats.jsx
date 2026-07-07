import { Github, Star, GitCommit, GitPullRequest, Code2 } from "lucide-react";

// In a real application, you'd fetch this data from the GitHub API:
// https://api.github.com/users/Ankit-kumar17
const stats = {
  username: "Ankit-kumar17",
  followers: 142,
  publicRepos: 45,
  stars: 284,
  commitsThisYear: 1243,
  topLanguages: [
    { name: "TypeScript", percent: 45, color: "bg-blue-500" },
    { name: "React", percent: 35, color: "bg-cyan-400" },
    { name: "Python", percent: 15, color: "bg-yellow-400" },
    { name: "Other", percent: 5, color: "bg-gray-400" },
  ],
};

const GithubStats = () => {
  return (
    <section id="github-stats" className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6 shadow-[0_0_20px_hsl(177_70%_50%/0.2)]">
                <Github className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Open Source Contributions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                I am a strong believer in open-source. I actively contribute to
                modern frameworks and build tools that help other developers
                ship faster.
              </p>

              <a
                href={`https://github.com/${stats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Follow me on GitHub
              </a>
            </div>

            {/* Right side stats grid */}
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <div className="glass-card bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                <GitCommit className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  {stats.commitsThisYear}
                </h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Commits this year
                </span>
              </div>

              <div className="glass-card bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                <Star className="w-6 h-6 text-yellow-400 mb-3" />
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  {stats.stars}
                </h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Stars Earned
                </span>
              </div>

              <div className="glass-card bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                <GitPullRequest className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  {stats.publicRepos}
                </h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Repositories
                </span>
              </div>

              <div className="glass-card bg-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                <Code2 className="w-6 h-6 text-purple-400 mb-3" />
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  Top Tech
                </h3>

                {/* Language Progress Bars */}
                <div className="w-full mt-2 flex h-2 rounded-full overflow-hidden">
                  {stats.topLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      className={`h-full ${lang.color}`}
                      style={{ width: `${lang.percent}%` }}
                      title={`${lang.name} ${lang.percent}%`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
