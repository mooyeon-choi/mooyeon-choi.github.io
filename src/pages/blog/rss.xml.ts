import { feed } from '../../lib/feed';
export const GET = ({ site }) => feed(site, false);
