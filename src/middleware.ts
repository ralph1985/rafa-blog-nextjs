import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import i18n from '@i18n';

const middleware = (request: NextRequest) => {
  const locale = request.nextUrl.locale || i18n.defaultLocale;
  const regex = /\w+\.(svg|jpg|png)$/i;

  if (!regex.test(request.nextUrl.href)) {
    request.nextUrl.searchParams.set('lang', locale);
    request.nextUrl.href = request.nextUrl.href.replace(`/${locale}`, '');

    return NextResponse.rewrite(request.nextUrl);
  }

  return NextResponse.next();
};

export default middleware;
