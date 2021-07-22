import { ISectionListData } from '../models/shared';
import { IWarscroll } from '../models/warscroll';

export const getListOfWarscrolls = async () => {
  try {
    let response = await fetch(
      'https://api-eu-central-1.graphcms.com/v2/ckqgykxxlgpi101wa1z9e5irj/master',
      {
        method: 'POST',
        body: JSON.stringify({
          query: `#graphql
          {
            factions(orderBy: name_ASC) {
              title: name
              data: warscrolls {
                ... on Warscroll{
                  id
                  name
                  subname
                  image {
                      url
                  }
                  move
                  save
                  bravery
                  wounds
                  flavorText
                  description {
                      html
                  }
                  fly
                  weapons {
                      ... on Weapon {
                          name
                          type
                          range
                          attacks
                          toHit
                          toWound
                          rend
                          damage
                      }
                  }
                  damageTable {
                      woundsSuffered
                      damageTableEntries {
                          ... on DamageTableEntry {
                              name
                              values
                          }
                      }
                  }
                  abilities {
                      ... on Rule {
                          name
                          flavorText
                          description {
                              html
                          }
                      }
                  }
                  magic {
                      html
                  }
                  casts
                  unbinds
                  spells {
                      ... on Rule {
                          name
                          flavorText
                          description {
                              html
                          }
                      }
                  }
                  commandAbilities {
                      ... on Rule {
                          name
                          flavorText
                          description {
                              html
                          }
                      }
                  }
                  keywords
                  pointCost
                  battlefieldRole
                  unitSize
                  notes {
                      html
                  }
                }
              }
            }
          }
        `,
        }),
      }
    );

    let json = await response.json();

    return json.data.factions as ISectionListData<IWarscroll>[];
  } catch (error) {
    console.error(error);
  }
};
