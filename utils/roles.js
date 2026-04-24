export const ROLES = {
  ADMIN: 'playwright/.auth/admin.json',
  STANDARD_USER: 'playwright/.auth/standardUser.json',
  GUEST: { cookies: [], origins: [] } // Для тестів без авторизації
};