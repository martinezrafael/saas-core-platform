export abstract class Entity<Props> {
  protected constructor(
    public readonly id: string,
    protected readonly props: Props,
  ) {}

  equals(entity?: Entity<Props>): boolean {
    return !!entity && entity.id === this.id;
  }
}
