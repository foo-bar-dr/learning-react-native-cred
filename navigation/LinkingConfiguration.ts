/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const LinkingConfigObject: LinkingOptions = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Money: {
            screens: {
              TabOneScreen: 'money',
            },
          },
          Cards: {
            screens: {
              TabTwoScreen: 'cards',
            },
          },
          Home: {
            screens: {
              HomeScreen: {
                path: 'home'
              }
            }
          },
          Club: {
            screens: {
              ClubScreen: {
                path: 'club',
                screens: {
                  Rewards: 'rewards',
                  Travel: 'travel',
                  Store: 'store',
                }
              },
            },
          }
        },
      },
      NotFound: '*',
    },
  },
}

export default LinkingConfigObject;
