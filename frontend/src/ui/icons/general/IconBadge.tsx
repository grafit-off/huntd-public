import cn from 'classnames';
import React from 'react';
import icons from '@/ui/icons/icons.module.scss';
import { FCIcon } from '@/ui/icons/typedefs';

export const IconBadge: FCIcon = () => (
  // classname "icon" for overrides
  <svg
    className={cn(icons.icon, 'icon-badge')}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.1968 6.1224C12.1801 6.0859 12.1532 6.05499 12.1193 6.03331C12.0855 6.01164 12.0462 6.00012 12.006 6.00012C11.9659 6.00012 11.9265 6.01164 11.8927 6.03331C11.8589 6.05499 11.832 6.0859 11.8152 6.1224L10.956 7.986C10.941 8.01846 10.9178 8.04652 10.8888 8.06752C10.8599 8.08852 10.826 8.10177 10.7904 8.106L8.75164 8.3484C8.71189 8.35321 8.67433 8.3693 8.64342 8.39475C8.6125 8.4202 8.58951 8.45397 8.57715 8.49206C8.56479 8.53015 8.56358 8.57098 8.57366 8.60973C8.58374 8.64849 8.60469 8.68356 8.63404 8.7108L10.1412 10.104C10.1677 10.1284 10.1875 10.1592 10.1986 10.1935C10.2098 10.2277 10.2119 10.2643 10.2048 10.2996L9.80404 12.312C9.76924 12.4884 9.95644 12.624 10.1124 12.5364L11.904 11.5344C11.9352 11.5171 11.9703 11.508 12.006 11.508C12.0417 11.508 12.0768 11.5171 12.108 11.5344L13.8996 12.5364C14.0556 12.624 14.2428 12.4884 14.208 12.312L13.8084 10.2996C13.8014 10.2643 13.8035 10.2277 13.8147 10.1935C13.8258 10.1592 13.8456 10.1284 13.872 10.104L15.378 8.7108C15.4074 8.68356 15.4283 8.64849 15.4384 8.60973C15.4485 8.57098 15.4473 8.53015 15.4349 8.49206C15.4226 8.45397 15.3996 8.4202 15.3687 8.39475C15.3377 8.3693 15.3002 8.35321 15.2604 8.3484L13.2228 8.106C13.1871 8.10196 13.153 8.08881 13.1238 8.06779C13.0946 8.04678 13.0712 8.01862 13.056 7.986L12.1968 6.1224Z" fill="currentColor" />
    <path d="M20 9.2502C20.0012 10.4111 19.7643 11.5592 19.3047 12.619C18.8451 13.6787 18.1733 14.6262 17.3333 15.3992V22.3127C17.3333 22.4331 17.3026 22.5514 17.2443 22.6557C17.186 22.76 17.1022 22.8467 17.0012 22.9072C16.9003 22.9676 16.7857 22.9996 16.6689 23C16.5522 23.0004 16.4374 22.9692 16.336 22.9095L12 20.3547L7.664 22.9095C7.56263 22.9692 7.44783 23.0004 7.33108 23C7.21434 22.9996 7.09974 22.9676 6.99876 22.9072C6.89778 22.8467 6.81396 22.76 6.75568 22.6557C6.6974 22.5514 6.66671 22.4331 6.66667 22.3127V15.3992C5.67202 14.4818 4.91572 13.3223 4.46663 12.0264C4.01754 10.7305 3.88993 9.33937 4.09542 7.97962C4.30091 6.61987 4.83297 5.33473 5.64315 4.24122C6.45334 3.14772 7.5159 2.28058 8.7341 1.71878C9.95229 1.15698 11.2874 0.918357 12.6179 1.02465C13.9484 1.13093 15.2319 1.57876 16.3517 2.32733C17.4714 3.07591 18.3918 4.10146 19.029 5.31059C19.6662 6.51973 20 7.87404 20 9.2502ZM12 17.5002C10.5956 17.5023 9.21561 17.1214 8 16.3961V21.1288L11.6693 18.966C11.77 18.9066 11.884 18.8754 12 18.8754C12.116 18.8754 12.23 18.9066 12.3307 18.966L16 21.1302V16.3975C14.7843 17.1224 13.4043 17.5028 12 17.5002ZM12 16.1252C13.7681 16.1252 15.4638 15.4009 16.714 14.1116C17.9643 12.8223 18.6667 11.0736 18.6667 9.2502C18.6667 7.42684 17.9643 5.67815 16.714 4.38884C15.4638 3.09952 13.7681 2.37519 12 2.37519C10.2319 2.37519 8.5362 3.09952 7.28596 4.38884C6.03571 5.67815 5.33333 7.42684 5.33333 9.2502C5.33333 11.0736 6.03571 12.8223 7.28596 14.1116C8.5362 15.4009 10.2319 16.1252 12 16.1252Z" fill="currentColor" />
  </svg>
);