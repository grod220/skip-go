import { NextPage } from 'next';
import React from 'react';
import { SwapWidgetWithoutProviders } from '@skip-go/widget';
import { SwapWidgetProvider } from '@skip-go/widget';

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          width: '450px',
          height: '820px',
        }}
      >
        <SwapWidgetProvider>
          <SwapWidgetWithoutProviders
            defaultRoute={{
              srcChainID: 'osmosis-1',
              srcAssetDenom:
                'ibc/1480b8fd20ad5fcae81ea87584d269547dd4d436843c1d20f15e00eb64743ef4',
            }}
            filter={{
              destination: {
                'cosmoshub-4': [
                  'uatom',
                'ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86',
              ],
              }
            }}
            persistSwapWidgetState={false}
            onWalletConnected={(data) => console.log('connected', data)}
            onWalletDisconnected={({ chainType }) =>
              console.log('disconnected', chainType)
            }
            onTransactionBroadcasted={(data) =>
              console.log('broadcasted', data)
            }
            onTransactionComplete={(data) => console.log('complete', data)}
            onTransactionFailed={({ error }) => console.log('failed', error)}
    
          />
        </SwapWidgetProvider>
      </div>
      <button
        onClick={() => {
          if (window.confirm('Are you sure you want to purge all settings?')) {
            window.localStorage.clear();
            window.sessionStorage.clear();
            window.location.reload();
          }
        }}
        style={{
          height: '40px',
        }}
      >
        Purge Settings
      </button>
    </div>
  );
};

export default Home;
