import React from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import { wallet, search } from '../defaults/images';
import { styles, screenWidth, screenHeight } from '../Style';

export default function Search() {
  // 2. Use at the root of your app
  return (
    <SafeAreaView
      style={styles.viewport}>
      <ScrollView
        style={styles.defaultScollView}>
        <View
          style={{
            marginBottom: 14,
          }}>
          <View
            style={{
              paddingVertical: 12,
              paddingRight: 12,
            }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 14,
                marginLeft: 12,
              }}>
              <ImageBackground
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={'stretch'}
                style={{
                  width: 34,
                  height: 34,
                  alignItems: "center",
                  paddingVertical: 11,
                  marginRight: 108,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}>
                  {"←"}
                </Text>
              </ImageBackground>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 20,
                  fontWeight: "bold",
                  flex: 1,
                }}>
                {"Catégories"}
              </Text>
            </View>

            {/* SEARCH BAR */}
            <View
              style={{
                backgroundColor: "#D9D9D9",
                borderRadius: 20,
                paddingHorizontal: 10,
                marginBottom: 24,
                marginHorizontal: 20,
                flexDirection: 'row',
                flexWrap: 'nowrap'
              }}>
              <Image
                source={search}
                resizeMode={"contain"}
                style={{
                  width: 23,
                  height: 30,
                  marginVertical: 5,
                }}
              />
              <TextInput style={{ width: '90%', marginVertical: 2, marginHorizontal: 10 }}></TextInput>
            </View>

          </View>
          <ImageBackground
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={'stretch'}
            style={{
              width: 62,
              height: 62,
              paddingVertical: 6,
              paddingLeft: 9,
              paddingRight: 7,
              marginHorizontal: 23,
            }}
          >
            <View
              style={{
                marginTop: 3,
              }}>
              <ImageBackground
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={'stretch'}
                style={{
                  height: 43,
                  paddingLeft: 41,
                }}
              >
                <View
                  style={{
                    width: 2,
                    height: 2,
                    backgroundColor: "#4C241D",
                    marginTop: 29,
                  }}>
                </View>
              </ImageBackground>
              <View
                style={{
                  position: "absolute",
                  top: -3,
                  left: 3,
                  width: 4,
                  height: 4,
                  borderColor: "#4C241D",
                  borderWidth: 1,
                }}>
              </View>
            </View>
            <ImageBackground
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={'stretch'}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 40,
                height: 42,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 2,
                  marginBottom: 3,
                }}>
                <View
                  style={{
                    width: 2,
                    height: 2,
                    backgroundColor: "#4C241D",
                  }}>
                </View>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    width: 9,
                    height: 8,
                  }}
                />
              </View>
              <ImageBackground
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={'stretch'}
                style={{
                  width: 24,
                  height: 23,
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    height: 7,
                    marginTop: 4,
                  }}
                />
              </ImageBackground>
            </ImageBackground>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                top: 0,
                right: 1,
                width: 11,
                height: 11,
              }}
            />
          </ImageBackground>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              marginLeft: 100,
            }}>
            {"Viande"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 14,
            marginHorizontal: 23,
          }}>
          <ImageBackground
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={'stretch'}
            style={{
              width: 62,
              height: 62,
              paddingTop: 3,
              paddingBottom: 17,
              marginRight: 15,
            }}
          >
            <View
              style={{
                width: 1,
                height: 1,
                backgroundColor: "#4C241D",
                marginHorizontal: 19,
              }}>
            </View>
            <View
              style={{
                width: 1,
                height: 1,
                backgroundColor: "#4C241D",
                marginBottom: 3,
                marginHorizontal: 12,
              }}>
            </View>
            <View
              style={{
                paddingRight: -5,
                marginHorizontal: 8,
              }}>
              <ImageBackground
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={'stretch'}
                style={{
                  height: 37,
                  paddingBottom: 31,
                  paddingHorizontal: 15,
                }}
              >
                <View
                  style={{
                    width: 1,
                    height: 1,
                    marginBottom: 3,
                  }}>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <View
                    style={{
                      width: 1,
                      height: 1,
                      marginRight: 4,
                    }}>
                  </View>
                  <View
                    style={{
                      width: 1,
                      height: 1,
                    }}>
                  </View>
                </View>
                <View
                  style={{
                    width: 1,
                    height: 1,
                  }}>
                </View>
              </ImageBackground>
              <View
                style={{
                  position: "absolute",
                  top: 5,
                  right: -3,
                  width: 4,
                  height: 4,
                  borderColor: "#4C241D",
                  borderWidth: 1,
                }}>
              </View>
              <ImageBackground
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={'stretch'}
                style={{
                  position: "absolute",
                  bottom: -2,
                  right: 0,
                  width: 42,
                  height: 31,
                }}
              >
              </ImageBackground>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  bottom: -3,
                  left: -5,
                  width: 47,
                  height: 9,
                }}
              />
            </View>
          </ImageBackground>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              flex: 1,
            }}>
            {"Petit déjeuné"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 14,
            marginHorizontal: 23,
          }}>
          <ImageBackground
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={'stretch'}
            style={{
              width: 62,
              height: 62,
              paddingVertical: 9,
              marginRight: 15,
            }}
          >
            <View
              style={{
                width: 1,
                height: 1,
                backgroundColor: "#4C241D",
                marginHorizontal: 23,
              }}>
            </View>
            <View
              style={{
                marginHorizontal: 2,
              }}>
              <ImageBackground
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={'stretch'}
                style={{
                  height: 41,
                  paddingHorizontal: 5,
                }}
              >
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    width: 15,
                    height: 14,
                    marginTop: 5,
                  }}
                />
              </ImageBackground>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  height: 36,
                  marginHorizontal: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: "#4C241D",
                marginHorizontal: 30,
              }}>
            </View>
          </ImageBackground>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              flex: 1,
            }}>
            {"Patisserie"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 14,
            marginHorizontal: 23,
          }}>
          <ImageBackground
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={'stretch'}
            style={{
              width: 62,
              height: 62,
              paddingTop: 7,
              paddingBottom: 17,
              paddingRight: 5,
              marginRight: 15,
            }}
          >
            <View
              style={{
                width: 1,
                height: 1,
                marginBottom: 2,
                marginLeft: 14,
              }}>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 11,
              }}>
              <View
                style={{
                  width: 1,
                  height: 1,
                  marginRight: 2,
                }}>
              </View>
              <View
                style={{
                  width: 1,
                  height: 1,
                }}>
              </View>
              <View
                style={{
                  width: 1,
                  height: 1,
                }}>
              </View>
              <View
                style={{
                  flex: 1,
                }}>
              </View>
              <View
                style={{
                  width: 4,
                  height: 4,
                  borderColor: "#4C241D",
                  borderWidth: 1,
                }}>
              </View>
            </View>
            <View
              style={{
                width: 1,
                height: 1,
                backgroundColor: "#4C241D",
                marginBottom: 1,
                marginLeft: 23,
              }}>
            </View>
            <View
              style={{
                width: 1,
                height: 1,
                backgroundColor: "#4C241D",
                marginLeft: 56,
              }}>
            </View>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 28,
                marginLeft: 11,
              }}
            />
          </ImageBackground>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              flex: 1,
            }}>
            {"Diné"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 14,
            marginHorizontal: 23,
          }}>
          <ImageBackground
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={'stretch'}
            style={{
              width: 62,
              height: 62,
              paddingHorizontal: 10,
              marginRight: 15,
            }}
          >
            <View
              style={{
                marginTop: 6,
              }}>
              <ImageBackground
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={'stretch'}
                style={{
                  height: 45,
                  paddingTop: 5,
                  paddingBottom: 29,
                }}
              >
                <ImageBackground
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={'stretch'}
                  style={{
                    width: 9,
                    height: 9,
                    paddingHorizontal: 4,
                    marginBottom: 1,
                    marginHorizontal: 4,
                  }}
                >
                  <View
                    style={{
                      height: 2,
                      borderColor: "#4C241D",
                      borderWidth: 2,
                      marginTop: 4,
                    }}>
                  </View>
                </ImageBackground>
                <View
                  style={{
                    width: 1,
                    height: 1,
                    backgroundColor: "#4C241D",
                  }}>
                </View>
              </ImageBackground>
              <ImageBackground
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={'stretch'}
                style={{
                  position: "absolute",
                  bottom: -4,
                  right: -3,
                  width: 40,
                  height: 43,
                  paddingHorizontal: 2,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    marginBottom: 2,
                  }}>
                  <View
                    style={{
                      width: 14,
                      alignSelf: "flex-start",
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: 2,
                    }}>
                    <View
                      style={{
                        flex: 1,
                      }}>
                      <ImageBackground
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={'stretch'}
                        style={{
                          height: 6,
                          marginHorizontal: 4,
                        }}
                      >
                        <View
                          style={{
                            height: 3,
                            backgroundColor: "#4C241D",
                          }}>
                        </View>
                      </ImageBackground>
                      <Image
                        source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                        resizeMode={"stretch"}
                        style={{
                          height: 14,
                          marginTop: -5,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: 3,
                      height: 3,
                      borderColor: "#FFCE56",
                      borderWidth: 1,
                      marginTop: 8,
                    }}>
                  </View>
                  <View
                    style={{
                      width: 3,
                      height: 3,
                      borderColor: "#FFCE56",
                      borderWidth: 1,
                      marginTop: 13,
                    }}>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <View
                    style={{
                      width: 3,
                      height: 3,
                      borderColor: "#FFCE56",
                      borderWidth: 1,
                      marginRight: 2,
                    }}>
                  </View>
                  <View
                    style={{
                      width: 3,
                      height: 3,
                      borderColor: "#FFCE56",
                      borderWidth: 1,
                      marginRight: 3,
                    }}>
                  </View>
                  <View
                    style={{
                      width: 3,
                      height: 3,
                      borderColor: "#FFCE56",
                      borderWidth: 1,
                    }}>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              flex: 1,
            }}>
            {"Poisson"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 23,
          }}>
          <ImageBackground
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={'stretch'}
            style={{
              width: 62,
              height: 62,
              flexDirection: "row",
              alignItems: "center",
              padding: 7,
              marginRight: 15,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <ImageBackground
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={'stretch'}
                  style={{
                    height: 37,
                    paddingBottom: 33,
                    paddingHorizontal: 5,
                  }}
                >
                  <View
                    style={{
                      width: 1,
                      height: 1,
                      marginBottom: 2,
                    }}>
                  </View>
                  <View
                    style={{
                      width: 1,
                      height: 1,
                      backgroundColor: "#4C241D",
                    }}>
                  </View>
                </ImageBackground>
                <ImageBackground
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={'stretch'}
                  style={{
                    width: 34,
                    height: 38,
                    paddingTop: 17,
                    paddingBottom: 7,
                    paddingLeft: 27,
                    paddingRight: 2,
                    marginTop: -33,
                  }}
                >
                  <View
                    style={{
                      width: 1,
                      height: 1,
                      backgroundColor: "#E66353",
                      marginBottom: 3,
                    }}>
                  </View>
                  <View
                    style={{
                      width: 1,
                      height: 1,
                      backgroundColor: "#E66353",
                    }}>
                  </View>
                  <View
                    style={{
                      width: 1,
                      height: 1,
                      backgroundColor: "#E66353",
                      marginBottom: 3,
                    }}>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 3,
                    }}>
                    <View
                      style={{
                        width: 1,
                        height: 1,
                        backgroundColor: "#E66353",
                      }}>
                    </View>
                    <View
                      style={{
                        width: 1,
                        height: 1,
                        backgroundColor: "#E66353",
                      }}>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 1,
                      height: 1,
                      backgroundColor: "#E66353",
                    }}>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 7,
                  height: 13,
                }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 7,
                  height: 11,
                }}
              />
            </View>
            <View
              style={{
                width: 1,
                height: 1,
                marginRight: 3,
              }}>
            </View>
            <View
              style={{
                width: 1,
                height: 1,
                marginRight: 1,
              }}>
            </View>
            <View
              style={{
                width: 1,
                height: 1,
              }}>
            </View>
            <ImageBackground
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={'stretch'}
              style={{
                position: "absolute",
                bottom: 0,
                left: 1,
                width: 35,
                height: 36,
              }}
            >
            </ImageBackground>
          </ImageBackground>
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: "bold",
              flex: 1,
            }}>
            {"Fruits"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
