'use server';

import { deleteSession } from '@/app/api/auth/session/actions';

export async function signOutAction() {
  await deleteSession();
}
