import { join } from "path";

export class WorkingDirectory {
    constructor(
        public readonly cwd: string,
        public readonly cliFolder: string,
        public readonly repoRoot: string,
    ) {}

    public isInsideRepo(targetPath: string): boolean {
        return targetPath.startsWith(this.repoRoot);
    }

    public resolveInRepo(...segments: string[]): string {
        return join(this.repoRoot, ...segments);
    }
}
