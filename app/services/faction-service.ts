import { IFaction } from '../models/faction';
import { ISectionListData } from '../models/shared';

export const getListOfFactions = async () => {
  try {
    let response = await fetch(
      'https://api-eu-central-1.graphcms.com/v2/ckqgykxxlgpi101wa1z9e5irj/master',
      {
        method: 'POST',
        body: JSON.stringify({
          query: `#graphql
          {
            grandAlliances(orderBy: name_ASC) {
              title: name
              data: factions {
                ... on Faction {
                  id
                  name
                  warscrolls {
                      ... on Warscroll {
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
                  allies {
                      ... on Faction {
                          name
                      }
                  }
                  battleTraits {
                      ... on Rule {
                          name
                          flavorText
                          description {
                              html
                          }
                      }
                  }
                  subfactions {
                      ... on Subfaction {
                        id
                        name
                        ruleGroups {
                            ... on RuleGroup {
                                name,
                                description {
                                    html
                                }
                                rules {
                                    ... on Rule {
                                        name
                                        flavorText
                                        description {
                                            html
                                        }
                                    }
                                }
                            }
                        } 
                      }
                  }
                  factionTerrainRules {
                      ... on FactionTerrainRule {
                          id
                          name
                          description {
                              html
                          }
                          sceneryWarscrolls {
                              ... on SceneryWarscroll {
                                  name
                                  flavorText
                                  image {
                                      url
                                  }
                                  sceneryRules {
                                      ... on Rule {
                                        name,
                                        flavorText
                                        description {
                                            html
                                        }
                                    }
                                  }
                                  keywords
                              }
                          }
                      }
                  }
                  ruleSections {
                    ... on RuleSection {
                        name
                        description {
                            html
                        }
                        generalRules {
                            ... on Rule {
                                name
                                flavorText
                                description {
                                    html
                                }
                            }
                        }
                        ruleGroups {
                            ... on RuleGroup {
                              name
                              description {
                                  html
                              }
                              rules {
                                  ... on Rule {
                                      name
                                      flavorText
                                      description {
                                          html
                                      }
                                  }
                              }
                          }
                        }
                    }
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

    return json.data.grandAlliances as ISectionListData<IFaction>[];
  } catch (error) {
    console.error(error);
  }
};
