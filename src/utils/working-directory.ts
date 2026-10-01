export class WorkingDirectory {
    constructor(
        public readonly cwd: string,
        public readonly cliFolder: string,
        public readonly repoRoot: string,
    ) {}

    public isInsideRepo(targetPath: string): boolean {
        return targetPath.startsWith(this.repoRoot);
    }
}
