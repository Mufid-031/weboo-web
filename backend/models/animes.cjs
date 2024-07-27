/* eslint-disable no-undef */
// backend/models/Anime.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnimeSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  link: {
    type: Object,
    required: true,
    self: {
      type: String,
      required: true
    }
  },
  attributtes: {
    type: Object,
    required: true,
    createdAt: {
      type: String,
      required: true
    },
    updatedAt: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    synopsis: {
      type: String,
      required: true
    },
    coverImageTopOffset: {
      type: Number,
      required: true
    },
    titles: {
      type: Object,
      required: true,
      en: {
        type: String,
        required: true
      },
      en_jp: {
        type: String,
        required: true
      },
      ja_jp: {
        type: String,
        required: true
      }
    },
    canonicalTitle: {
      type: String,
      required: true
    },
    abbreviatedTitles: {
      type: Array,
      required: true
    },
    averageRating: {
      type: String,
      required: true
    },
    ratingFrequencies: {
      type: Object,
      required: true,
      2: {
        type: String,
        required: true
      },
      3: {
        type: String,
        required: true
      },
      4: {
        type: String,
        required: true
      },
      5: {
        type: String,
        required: true
      },
      6: {
        type: String,
        required: true
      },
      7: {
        type: String,
        required: true
      },
      8: {
        type: String,
        required: true
      },
      9: {
        type: String,
        required: true
      },
      10: {
        type: String,
        required: true
      },
      11: {
        type: String,
        required: true
      },
      12: {
        type: String,
        required: true
      },
      13: {
        type: String,
        required: true
      },
      14: {
        type: String,
        required: true
      },
      15: {
        type: String,
        required: true
      },
      16: {
        type: String,
        required: true
      },
      17: {
        type: String,
        required: true
      },
      18: {
        type: String,
        required: true
      },
      19: {
        type: String,
        required: true
      },
      20: {
        type: String,
        required: true
      }
    },
    userCount: {
      type: Number,
      required: true
    },
    favoritesCount: {
      type: Number,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    nextRelease: {
      type: String || null,
      required: true
    },
    popularityRank: {
      type: Number,
      required: true
    },
    ratingRank: {
      type: Number,
      required: true
    },
    ageRating: {
      type: String,
      required: true
    },
    ageRatingGuide: {
      type: String,
      required: true
    },
    subtype: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    tba: {
      type: String || null,
      required: true
    },
    posterImage: {
      type: Object,
      required: true,
      tiny: {
        type: String,
        required: true
      },
      small: {
        type: String,
        required: true
      },
      medium: {
        type: String,
        required: true
      },
      large: {
        type: String,
        required: true
      },
      original: {
        type: String,
        required: true
      },
      meta: {
        type: Object,
        required: true,
        dimensions: {
          type: Object,
          required: true,
          tiny: {
            type: Object,
            required: true,
            width: {
              type: Number,
              required: true
            },
            height: {
              type: Number,
              required: true
            }
          },
          small: {
            type: Object,
            required: true,
            width: {
              type: Number,
              required: true
            },
            height: {
              type: Number,
              required: true
            }
          },
          medium: {
            type: Object,
            required: true,
            width: {
              type: Number,
              required: true
            },
            height: {
              type: Number,
              required: true
            }
          },
          large: {
            type: Object,
            required: true,
            width: {
              type: Number,
              required: true
            },
            height: {
              type: Number,
              required: true
            }
          },
        }
      }
    },
    coverImage: {
      type: Object,
      required: true,
      tiny: {
        type: String,
        required: true
      },
      small: {
        type: String,
        required: true
      },
      large: {
        type: String,
        required: true
      },
      original: {
        type: String,
        required: true
      },
      meta: {
        type: Object,
        required: true,
        dimensions: {
          type: Object,
          required: true,
          tiny: {
            type: Object,
            required: true,
            width: {
              type: Number,
              required: true
            },
            height: {
              type: Number,
              required: true
            }
          },
          small: {
            type: Object,
            required: true,
            width: {
              type: Number,
              required: true
            },
            height: {
              type: Number,
              required: true
            }
          },
          large: {
            type: Object,
            required: true,
            width: {
              type: Number,
              required: true
            },
            height: {
              type: Number,
              required: true
            }
          },
        }
      }
    },
  }
})


module.exports = mongoose.model('Anime', AnimeSchema)
