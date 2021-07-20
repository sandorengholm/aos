import { IWarscrollList } from '../models/warscroll';

export const getListOfWarscrolls = async (): Promise<
  IWarscrollList | undefined
> => {
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

    return json.data as IWarscrollList;
  } catch (error) {
    console.error(error);
  }
};

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
                          flavorText
                          description {
                              html
                          }
                          sceneryWarscroll {
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

    return json.data.grandAlliances;
  } catch (error) {
    console.error(error);
  }
};
