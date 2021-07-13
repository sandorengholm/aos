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
            factions {
              title: name
              data: warscrolls {
                ... on Warscroll {
                  id
                  name
                  subname
                  image {
                      url
                  }
                  factions {
                      id
                      name
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
                      ... on Ability {
                          name
                          flavorText
                          description {
                              html
                          }
                          designersNote
                      }
                  }
                  magic {
                      html
                  }
                  casts
                  unbinds
                  spells {
                      ... on Spell {
                          name
                          flavorText
                          description {
                              html
                          }
                          designersNote
                      }
                  }
                  commandAbilities {
                      ... on CommandAbility {
                          name
                          flavorText
                          description {
                              html
                          }
                          designersNote
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
            grandAlliances {
              title: name
              data: factions {
                ... on Faction {
                  id
                  name
                  image {
                      url
                  }
                  grandAlliance {
                      ... on GrandAlliance {
                          name
                      }
                  }
                  warscrolls {
                      ... on Warscroll {
                        id
                        name
                        subname
                        image {
                            url
                        }
                        factions {
                            id
                            name
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
                            ... on Ability {
                                name
                                flavorText
                                description {
                                    html
                                }
                                designersNote
                            }
                        }
                        magic {
                            html
                        }
                        casts
                        unbinds
                        spells {
                            ... on Spell {
                                name
                                flavorText
                                description {
                                    html
                                }
                                designersNote
                            }
                        }
                        commandAbilities {
                            ... on CommandAbility {
                                name
                                flavorText
                                description {
                                    html
                                }
                                designersNote
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
                  canBeAlliedIn {
                      ... on Faction {
                          name
                      }
                  }
                  battleTraits {
                      ... on BattleTrait {
                          name
                          flavorText
                          description {
                              html
                          }
                          designersNote
                      }
                  }
                  subfactions {
                      ... on Subfaction {
                        id
                        name
                        abilities {
                            ... on Ability {
                                name,
                                flavorText
                                description {
                                    html
                                }
                                designersNote
                            }
                        }
                        commandAbilities {
                            ... on CommandAbility {
                            name,
                            flavorText
                            description {
                                html
                            }
                            designersNote
                            }
                        }
                        commandTraitDescription {
                            html
                        }
                        commandTrait {
                            ... on CommandTrait {
                            name,
                            flavorText
                            description {
                                html
                            }
                            designersNote
                            }
                        }
                        artefactOfPowerDescription {
                            html
                        }
                        artefactOfPower {
                            ... on ArtefactOfPower {
                            name,
                            flavorText
                            description {
                                html
                            }
                            designersNote
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
                                      ... on Ability {
                                        name,
                                        flavorText
                                        description {
                                            html
                                        }
                                        designersNote
                                    }
                                  }
                                  keywords
                              }
                          }
                      }
                  }
                  commandTraitDescription {
                      html
                  }
                  commandTraits {
                      ... on EnhancementGroup {
                          id
                          name
                          description {
                              html
                          }
                          enhancements {
                              ... on CommandTrait {
                                  name
                                  flavorText
                                  description {
                                      html
                                  }
                                  designersNote
                              }
                          }
                      }
                  }
                  artefactsOfPowerDescription {
                      html
                  }
                  artefactsOfPower {
                      ... on EnhancementGroup {
                          id
                          name
                          description {
                              html
                          }
                          enhancements {
                              ... on ArtefactOfPower {
                                  name
                                  flavorText
                                  description {
                                      html
                                  }
                                  designersNote
                              }
                          }
                      }
                  }
                  spellLoresDescription {
                      html
                  }
                  spellLores {
                      ... on EnhancementGroup {
                          id
                          name
                          description {
                              html
                          }
                          enhancements {
                              ... on Spell {
                                  name
                                  flavorText
                                  description {
                                      html
                                  }
                                  designersNote
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
