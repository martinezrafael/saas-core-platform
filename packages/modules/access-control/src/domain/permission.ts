export type Permission =
  | 'members.invite'
  | 'members.manage'
  | 'billing.manage'
  | 'workflows.create'
  | 'ai.use'
  | 'admin.access';

export type RoleName = 'owner' | 'admin' | 'member' | 'viewer';

export const rolePermissions: Record<RoleName, Permission[]> = {
  owner: [
    'members.invite',
    'members.manage',
    'billing.manage',
    'workflows.create',
    'ai.use',
    'admin.access',
  ],
  admin: ['members.invite', 'workflows.create', 'ai.use'],
  member: ['workflows.create', 'ai.use'],
  viewer: [],
};
