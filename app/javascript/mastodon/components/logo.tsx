import wordmark from '@/images/logo-symbol-wordmark.png';
import logo from '@/images/logo.png';

export const WordmarkLogo: React.FC = () => (
  <img src={wordmark} alt='Mastodon' className='logo logo--wordmark' />
);

export const IconLogo: React.FC = () => (
  <img src={logo} alt='Mastodon' className='logo logo--icon' />
);

export const SymbolLogo: React.FC = () => (
  <img src={logo} alt='Mastodon' className='logo logo--icon' />
);
