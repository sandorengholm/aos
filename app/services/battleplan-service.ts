import { IBattleplan } from '../models/battleplan';

export const getListOfBattleplans = async () => {
  try {
    let response = await fetch(
      'https://api-eu-central-1.graphcms.com/v2/ckqgykxxlgpi101wa1z9e5irj/master',
      {
        method: 'POST',
        body: JSON.stringify({
          query: `#graphql
            {
                battleplans {
                    name
                    battleplanSections {
                        ... on BattleplanSection {
                            name
                            description {
                                html
                            }
                        }
                    }
                    image {
                        url
                        height
                        width
                    }
                }
            }
          `,
        }),
      }
    );

    let json = await response.json();

    return json.data.battleplans as IBattleplan[];
  } catch (error) {
    console.error(error);
  }
};
