"use client";

import './global.css';
// import { UiLayout } from '@/components/ui/ui-layout';
// import { ClusterProvider } from '@/components/cluster/cluster-data-access';
// import { SolanaProvider } from '@/components/solana/solana-provider';
import { ReactQueryProvider } from './react-query-provider';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Navbar from '@/components/Navbar';
import "@solana/wallet-adapter-react-ui/styles.css";
import Head from 'next/head';

// export const metadata = {
//   title: 'dapp0',
//   description: 'Generated by create-solana-dapp',
// };

const links: { label: string; path: string }[] = [
  { label: 'Account', path: '/account' },
  { label: 'Clusters', path: '/clusters' },
  { label: 'Dapp0 Program', path: '/dapp0' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const endpoint=clusterApiUrl("devnet");
  return (
    <html lang="en">
      <body>
        <Head>
        <meta name="dscvr:canvas:version" content="vNext" />
        <meta
          name="og:image"
          content="https://my-canvas.com/preview-image.png"
        />
      </Head>
      <head>
        <meta name="dscvr:canvas:version" content="vNext" />
        <meta
          name="og:image"
          content="https://my-canvas.com/preview-image.png"
        />
      </head>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <Navbar/>
              {children}
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
