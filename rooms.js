var rooms = {
  "start": {
    "description": "After walking for so long, you stop.\
    You notice a sign.\ <br></br> \
    Written on the sign is:\ ''Entrance to \ <b>Misty Forest</b>''.",
     "directions": {
       "in": "enter_forest",
       "back": "go_back"
     }
  },
  "enter_forest": {
    "description": "<h3>Gate</h3> You\ have gone through the\
     gate. <br>\</br>\ You\ have entered the <b>Misty forest</b>",
     "directions": {
       "north": "north1",
       "east": "east1",
       "west": "west1",
       "south": "start"
     }
  },
  "go_back": {
    "description": "...Well, no adventure for you!!",
    "directions": {
      "back": "start"
    }
  },
  "east1": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around.",
    "directions": {
      "north": "northeast1",
      "east": "east2",
      "west": "enter_forest"
    }
  },
  "east2": {
    "description": "<h3>Forest</h3> You are in a forest.",
    "directions": {
      "north": "northeast4",
      "east": "east3",
      "west": "east1"
    }
  },
  "east3": {
    "description": "<h3>Wall</h3> Here the rock wall is broken,\
     you can go to the\ other side of the wall if you continue to\
      the <b>\east</b>.",
    "directions": {
      "east": "wall1",
      "west": "east2"
    }
  },
  "wall1": {
    "description": "<h3>Wall</h3>\ You can easily step over\
     the wall here,\ to the\ <b>east</b>,\ for some reason,\
     some time ago,\ this part of\ the wall, has crumbled down.\
     leaving a wide gap.",
      "directions": {
        "west": "east3",
        "east": "wall2"
      }
  },
  "north1": {
    "description": "<h3>Forest</h3> After walking for a while, \
    you come upon hoove prints.\ They lead to the <b>north</b>. \
    \<br></br> Are you going to follow them, or ignore them?",
      "directions": {
        "north": "north2",
        "west": "northwest1",
        "south": "enter_forest",
        "east": "northeast1"
      }
  },
  "north2": {
    "description": "<h3>Forest</h3> You see trees all around,\
     some are very tall\, others aren't as tall.<br></br>\
     From the north, You hear a faint sound.",
    "directions": {
      "north": "north3",
      "east": "northeast2",
      "west": "northwest2",
      "south": "north1"
    }
  },
  "north3": {
    "description": "<h3>Forest</h3> \ You hear that sound again,\
     now it's louder.\ <br></br> \
      That sound is still coming  from the north. ",
    "directions": {
      "north": "north4",
      "east": "northeast3",
      "west": "northwest3",
      "south": "north2"
    }
  },
  "north4": {
    "description": "<h3>Forest</h3> \ Now the sound has mysteriously \
     silenced. \ But, you do see a ligth in the rock wall, it is shimmering\
      to approach it\ you must go\ <b>north</b>.",
    "directions": {
      "north": "north5",
      "east": "northeast7",
      "west": "northwest7",
      "south": "north3"
    }
  },
  "north5": {
    "description": "<h3>The shimmering ligth</h3>\
     Now,\ that you are nearing the shimmering\
     light, you see there is\ a hole in the rock wall. ",
    "directions": {
      "north": "portal1",
      "east": "northeast7",
      "west": "northwest7",
      "south": "north4"
    }
  },
  "portal1": {
    // the portal leads to a magical world
    "description": "<h3>Portal</h3> .",
    "directions": {

    }
  },
  "west1": {
    "description": "<h3>Forest</h3> After quite a walk,\
     you stumble upon paw prints\ leading to the <b>west</b>.",
     "directions": {
       "west": "west2",
       "east": "enter_forest",
       "north": "northwest1"
     }
  },
  "west2": {
    "description": "<h3>Forest</h3> The paw prints\
     continue\ to the <b>west</b>.",
    "directions": {
      "north": "northwest4",
      "east": "west1",
      "west": "west3"
    }
  },
  "west3": {
    "description": "<h3>Fence</h3>\ Following the paw prints,\
    you arrive at a big fence, in front of you is a gate,\
    which you can\ open, leading\ <b>southwest</b>.\<br></br>\
    The smell you notice,\ that is coming from the southwest,\
     you find quite familiar. <br></br> The wall\
      stretches in <b>west</b>",
    "directions": {
      "southwest": "southwest1",
      "east": "west2"
    }
  },
  "southwest1": {
    "description": "<h3>Pack</h3> You should not have come this way.\
    You've\ entered the territory of a <b>wolf pack</b>. <br>\
    </br> You have been eaten.\ <br></br>\<h3>Game Over!!\</h3>"
  },
  "northeast1": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "west": "north1",
      "north": "norteast2",
      "east": "northeast4",
      "south": "east1"
    }
  },
  "norteast2": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "west": "north1",
      "north": "north2",
      "east": "northeast5",
      "south": "northeast1"
    }
  },
  "northeast3": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "north": "north2",
      "west": "north3",
      "east": "northeast6",
      "south": "norteast2"
    }
  },
  "northeast4": {
    "description": "<h3>Forest</h3> There is a big rock wall to the east.",
    "directions": {
      "north": "northeast5",
      "west": "northeast1",
      "south": "east2"
    }
  },
  "northeast5": {
    "description": "<h3>Forest</h3> There is a big rock wall to the east.",
    "directions": {
      "north": "northeast6",
      "west": "northeast2",
      "south": "northeast4"
    }
  },
  "northeast6": {
    "description": "<h3>Forest</h3> There is a big rock wall to the east.",
    "directions": {
      "north": "northeast7",
      "west": "northeast3",
      "south": "northeast5"
    }
  },
  "northeast7": {
    "description": "<h3>Forest</h3> There is a big rock wall to the east. \
    the rock wall, has begun to extend to the north",
    "directions": {
      "west": "north4",
      "south": "northeast3"
    }
  },
  "northwest1": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "north": "northwest2",
      "west": "northwest4",
      "east": "north1",
      "south": "west1"
    }
  },
  "northwest2": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "north": "northwest3",
      "west": "northwest5",
      "east": "north2",
      "south": "northwest1"
    }
  },
  "northwest3": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "north": "northwest7",
      "west": "northwest6",
      "east": "north3",
      "south": "northwest2"
    }
  },
  "northwest4": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "north": "west2",
      "east": "northwest1",
      "south": "west2"
    }
  },
  "northwest5": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "north": "northwest6",
      "east": "northwest2",
      "south": "northwest4"
    }
  },
  "northwest6": {
    "description": "<h3>Forest</h3> You are in a forest,\
     you see trees all around..",
    "directions": {
      "north": "northwest8",
      "east": "northwest3",
      "south": "northwest5"
    }
  },
  "northwest7": {
    "description": "<h3>Forest</h3> There is a big rock wall to the north.",
    "directions": {
      "west": "northwest8",
      "east": "north4",
      "south": "northeast3"
    }
  },
  "northwest8": {
    "description": "<h3>Forest</h3> There is a big rock wall to the north,\
     that extends to the west.",
    "directions": {
      "east": "northwest7",
      "south": "northwest6"
    }
  },
}
