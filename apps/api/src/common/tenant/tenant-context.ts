export type TenantContext = {
  tenantId: string;
  userId: string;
  role: string;
};

export class TenantContextStorage {
  private static context?: TenantContext;

  static set(context: TenantContext) {
    this.context = context;
  }

  static get(): TenantContext {
    if (!this.context) {
      throw new Error('Tenant context not found');
    }

    return this.context;
  }
}
