import cn from 'classnames';
import React from 'react';
import icons from '@/ui/icons/icons.module.scss';
import { FCIcon } from '@/ui/icons/typedefs';

export const IconCurvedArrowRight: FCIcon = () => (
  // classname "icon" for overrides
  <svg
    className={cn(icons.icon, 'icon-curved-arrow-right')}
    width="50"
    height="198"
    viewBox="0 0 50 198"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 131.669L0 131.669L1 131.669ZM49.59 187.929C50.0359 188.255 50.1332 188.88 49.8074 189.326L44.4973 196.593C44.1714 197.039 43.5458 197.136 43.0999 196.81C42.654 196.484 42.5566 195.859 42.8825 195.413L47.6026 188.954L41.1434 184.234C40.6975 183.908 40.6002 183.282 40.9261 182.836C41.2519 182.39 41.8776 182.293 42.3235 182.619L49.59 187.929ZM38.1061 1.4511C28.9783 19.5101 19.9458 44.1349 13.1955 68.2382C6.44072 92.3573 1.99987 115.853 2 131.669L0 131.669C-0.000133157 115.576 4.50026 91.8699 11.2696 67.6989C18.0434 43.512 27.1179 18.7571 36.3212 0.548901L38.1061 1.4511ZM2 131.669C2.00026 163.65 13.863 177.523 25.4592 183.514C31.3044 186.535 37.1615 187.595 41.5684 187.897C43.7696 188.048 45.6014 188.009 46.8781 187.933C47.5162 187.895 48.0149 187.848 48.3509 187.811C48.5188 187.792 48.6461 187.776 48.7296 187.765C48.7714 187.759 48.8022 187.755 48.8218 187.752C48.8316 187.75 48.8386 187.749 48.8427 187.749C48.8447 187.748 48.846 187.748 48.8466 187.748C48.8469 187.748 48.8469 187.748 48.847 187.748C48.8467 187.748 48.8463 187.748 49 188.736C49.1537 189.724 49.1529 189.725 49.1519 189.725C49.1513 189.725 49.1501 189.725 49.149 189.725C49.1467 189.726 49.1436 189.726 49.1399 189.727C49.1323 189.728 49.1219 189.729 49.1086 189.731C49.082 189.735 49.044 189.74 48.995 189.747C48.8969 189.76 48.7546 189.778 48.571 189.798C48.2039 189.839 47.6713 189.889 46.9969 189.929C45.6487 190.01 43.7305 190.05 41.4317 189.892C36.8388 189.578 30.6959 188.471 24.5412 185.291C12.1376 178.883 0.000269473 164.222 0 131.669L2 131.669Z"
      fill="currentColor"
    />
  </svg>

);