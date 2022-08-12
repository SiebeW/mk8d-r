import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-kart',
  templateUrl: './random-kart.component.html',
  styleUrls: ['./random-kart.component.scss']
})
export class RandomKartComponent implements OnInit {
  public randomKart = {
    character: {
      name: "",
      imageURL: ""
    },
    kart: {
      type: "",
      body: "",
      bodyURL: "",
      tires: "",
      tiresURL: "",
      glider: "",
      gliderURL: ""
    }
  };
  private data = {
    "Characters": [
        {
            "Name": "Mario",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/d/d9/MK8_Mario_Icon.png"
        },
        {
            "Name": "Luigi",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/5/51/MK8_Luigi_Icon.png"
        },
        {
            "Name": "Peach",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/c/c2/MK8_Peach_Icon.png"
        },
        {
            "Name": "Daisy",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/3/32/MK8_Daisy_Icon.png"
        },
        {
            "Name": "Rosalina",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/8/89/MK8_Rosalina_Icon.png"
        },
        {
            "Name": "Mario",
            "ImageURL": "https://mario.wiki.gallery/images/e/e3/MK8_MMario_Icon.png",
            "HasAlternateColor": true,
            "AltColors": [
                {
                    "Name":"Metal",
                    "ImageURL":"https://mario.wiki.gallery/images/e/e3/MK8_MMario_Icon.png"
                },
                {
                    "Name":"Gold",
                    "ImageURL":"https://mario.wiki.gallery/images/c/c8/MK8DX_Gold_Mario_Icon.png"
                }
            ]
        },
        {
            "Name": "Yoshi",
            "ImageURL": "https://mario.wiki.gallery/images/9/91/MK8_Yoshi_Icon.png",
            "HasAlternateColor": true,
            "AltColors": [
                {
                    "Name":"Red",
                    "ImageURL":"https://mario.wiki.gallery/images/b/b4/MK8_Red_Yoshi_Icon.png"
                },
                {
                    "Name":"Green",
                    "ImageURL":"https://mario.wiki.gallery/images/9/91/MK8_Yoshi_Icon.png"
                },
                {
                    "Name":"Blue",
                    "ImageURL":"https://mario.wiki.gallery/images/c/cc/MK8_Blue_Yoshi_Icon.png"
                },
                {
                    "Name":"Light Blue",
                    "ImageURL":"https://mario.wiki.gallery/images/8/8c/MK8_Light-Blue_Yoshi_Icon.png"
                },
                {
                    "Name":"Pink",
                    "ImageURL":"https://mario.wiki.gallery/images/4/4f/MK8_Pink_Yoshi_Icon.png"
                    
                },
                {
                    "Name":"Black",
                    "ImageURL":"https://mario.wiki.gallery/images/5/5c/MK8_Black_Yoshi_Icon.png"                    
                },
                {
                    "Name":"White",
                    "ImageURL":"https://mario.wiki.gallery/images/3/3f/MK8_White_Yoshi_Icon.png"
                },
                {
                    "Name":"Orange",
                    "ImageURL":"https://mario.wiki.gallery/images/8/89/MK8_Orange_Yoshi_Icon.png"
                },
                {
                    "Name":"Yellow",
                    "ImageURL":"https://mario.wiki.gallery/images/c/c7/MK8_Yellow_Yoshi_Icon.png"
                }
            ]
        },
        {
            "Name": "Toad",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/4/45/MK8_Toad_Icon.png"
        },
        {
            "Name": "Koopa Troopa",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/b/bc/MK8_Koopa_Icon.png"
        },
        {
            "Name": "Shy Guy",
            "ImageURL": "https://mario.wiki.gallery/images/7/7f/MK8_ShyGuy_Icon.png",
            "HasAlternateColor": true,
            "AltColors": [
                {
                    "Name":"Red",
                    "ImageURL":"https://mario.wiki.gallery/images/7/7f/MK8_ShyGuy_Icon.png"
                },
                {
                    "Name":"Green",
                    "ImageURL":"https://mario.wiki.gallery/images/7/74/MK8_Green_Shy_Guy_Icon.png"
                },
                {
                    "Name":"Blue",
                    "ImageURL":"https://mario.wiki.gallery/images/4/41/MK8_Blue_Shy_Guy_Icon.png"
                },
                {
                    "Name":"Light Blue",
                    "ImageURL":"https://mario.wiki.gallery/images/d/d9/MK8_Light-Blue_Shy_Guy_Icon.png"
                },
                {
                    "Name":"Pink",
                    "ImageURL":"https://mario.wiki.gallery/images/b/bf/MK8_Pink_Shy_Guy_Icon.png"
                },
                {
                    "Name":"Black",
                    "ImageURL":"https://mario.wiki.gallery/images/5/57/MK8_Black_Shy_Guy_Icon.png"
                },
                {
                    "Name":"White",
                    "ImageURL":"https://mario.wiki.gallery/images/2/20/MK8_White_Shy_Guy_Icon.png"
                },
                {
                    "Name":"Orange",
                    "ImageURL":"https://mario.wiki.gallery/images/9/9e/MK8_Orange_Shy_Guy_Icon.png"
                },
                {
                    "Name":"Yellow",
                    "ImageURL":"https://mario.wiki.gallery/images/d/d3/MK8_Yellow_Shy_Guy_Icon.png"
                }
            ]
        },
        {
            "Name": "Inkling",
            "ImageURL": "https://mario.wiki.gallery/images/b/b9/MK8DX_Female_Inkling_Icon.png",
            "HasAlternateColor": true,
            "AltColors": [
                {
                    "Name":"Orange Girl",
                    "ImageURL":"https://mario.wiki.gallery/images/b/b9/MK8DX_Female_Inkling_Icon.png"
                },
                {
                    "Name":"Lime Girl",
                    "ImageURL":"https://mario.wiki.gallery/images/a/a8/MK8D_Green_Inkling_Icon.png"
                },
                {
                    "Name":"Magenta Girl",
                    "ImageURL":"https://mario.wiki.gallery/images/1/14/MK8D_Pink_Inkling_Icon.png"
                },
                {
                    "Name":"Blue Boy",
                    "ImageURL":"https://mario.wiki.gallery/images/3/3c/MK8DX_Male_Inkling_Icon.png"
                },
                {
                    "Name":"Purple Boy",
                    "ImageURL":"https://mario.wiki.gallery/images/b/ba/MK8D_Purple_Inkling_Icon.png"
                },
                {
                    "Name":"Teal Boy",
                    "ImageURL":"https://mario.wiki.gallery/images/e/e6/MK8D_Cyan_Inkling_Icon.png"
                }
            ]
        },
        {
            "Name": "Lakitu",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/7/7d/MK8_Lakitu_Icon.png"
        },
        {
            "Name": "Toadette",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/8/8e/MK8_Toadette_Icon.png"
        },
        {
            "Name": "Baby Mario",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/d/d2/MK8_BabyMario_Icon.png"
        },
        {
            "Name": "Baby Luigi",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/a/aa/MK8_BabyLuigi_Icon.png"
        },
        {
            "Name": "Baby Peach",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/3/3d/MK8_BabyPeach_Icon.png"
        },
        {
            "Name": "Baby Daisy",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/4/43/MK8_BabyDaisy_Icon.png"
        },
        {
            "Name": "Baby Rosalina",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/0/09/MK8_BabyRosalina_Icon.png"
        },
        {
            "Name": "Pink Gold Peach",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/0/0d/MK8_PGPeach_Icon.png"
        },
        {
            "Name": "Bowser",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/4/47/MK8_Bowser_Icon.png"
        },
        {
            "Name": "Donkey Kong",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/0/08/MK8_DKong_Icon.png"
        },
        {
            "Name": "Wario",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/c/c2/MK8_Wario_Icon.png"
        },
        {
            "Name": "Waluigi",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/7/78/MK8_Waluigi_Icon.png"
        },
        {
            "Name": "Iggy",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/d/dd/MK8_Iggy_Icon.png"
        },
        {
            "Name": "Roy",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/3/3e/MK8_Roy_Icon.png"
        },
        {
            "Name": "Lemmy",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/f/fc/MK8_Lemmy_Icon.png"
        },
        {
            "Name": "Larry",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/c/c2/MK8_Larry_Icon.png"
        },
        {
            "Name": "Wendy",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/d/d9/MK8_Wendy_Icon.png"
        },
        {
            "Name": "Ludwig",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/a/a8/MK8_Ludwig_Icon.png"
        },
        {
            "Name": "Morton",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/7/72/MK8_Morton_Icon.png"
        },
        // {
        //     "Name": "Mii",
        //     "HasAlternateColor": false,
        //     "ImageURL": "https://mario.wiki.gallery/images/b/bb/Mii_MK8.png"
        // },
        {
            "Name": "Tanooki Mario",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/a/a2/MK8_Tanooki_Mario_Icon.png"
        },
        {
            "Name": "Cat Peach",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/a/ad/MK8_Cat_Peach_Icon.png"
        },
        {
            "Name": "Link",
            "HasAlternateColor": true,
            "ImageURL": "https://mario.wiki.gallery/images/e/e8/MK8_Link_Icon.png",
            "AltColors": [
                {
                    "Name":"Regular",
                    "ImageURL":"https://mario.wiki.gallery/images/e/e8/MK8_Link_Icon.png"
                },
                {
                    "Name":"Breath of the Wild",
                    "ImageURL":"https://mario.wiki.gallery/images/9/9e/MK8D_BotW_Link_Icon.png"
                }
            ]
        },
        {
            "Name": "Villager",
            "HasAlternateColor": true,
            "ImageURL": "https://mario.wiki.gallery/images/4/41/MK8_Villager_Icon.png",
            "AltColors": [
                {
                    "Name":"Male",
                    "ImageURL":"https://mario.wiki.gallery/images/1/16/VillagerMale-Icon-MK8.png"
                },
                {
                    "Name":"Female",
                    "ImageURL":"https://mario.wiki.gallery/images/c/c3/VillagerFemale-Icon-MK8.png"
                }
            ]
        },
        {
            "Name": "Isabelle",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/2/20/MK8_Isabelle_Icon.png"
        },
        {
            "Name": "Dry Bowser",
            "HasAlternateColor": false,
            "ImageURL": "https://mario.wiki.gallery/images/2/29/MK8_Dry_Bowser_Icon.png"
        }
    ],
    "Vehicles": {
        "Bodies": [
            {
                "Name": "Standard",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/0/05/StandardKartBodyMK8.png"
            },
            {
                "Name": "Gold Standard",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/f/fe/Gold_Standard.png"
            },
            {
                "Name": "Standard",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/8/84/StandardBikeBodyMK8.png"
            },
            {
                "Name": "Standard ATV",
                "Type": "ATV",
                "ImageURL": "https://mario.wiki.gallery/images/2/23/StandardATVBodyMK8.png"
            },
            {
                "Name": "Pipe Frame",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/d/d1/PipeFrameBodyMK8.png"
            },
            {
                "Name": "Koopa Clown",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/7/70/MK8DX_Koopa_Clown.png"
            },
            {
                "Name": "Mach 8",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/d/df/Mach8BodyMK8.png"
            },
            {
                "Name": "Steel Diver",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/9/94/Steel_Driver.png"
            },
            {
                "Name": "Cat Cruiser",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/f/f4/CatCruiserBodyMK8.png"
            },
            {
                "Name": "B Dasher",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/1/15/ZeldaMK8Bdasher.png"
            },
            {
                "Name": "Circuit Special",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/6/6c/CircuitSpecialBodyMK8.png"
            },
            {
                "Name": "Tri-Speeder",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/5/56/TrispeederBodyMK8.png"
            },
            {
                "Name": "Badwagon",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/c/c2/BadwagonBodyMK8.png"
            },
            {
                "Name": "Prancer",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/f/ff/PrancerBodyMK8.png"
            },
            {
                "Name": "Biddybuggy",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/4/45/BiddybuggyBodyMK8.png"
            },
            {
                "Name": "Landship",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/6/6d/LandshipBodyMK8.png"
            },
            {
                "Name": "Sneeker",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/4/47/SneakerBodyMK8.png"
            },
            {
                "Name": "Sports Coupe",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/f/f8/SportsCoupeMK8.png"
            },
            {
                "Name": "Sports",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/f/fe/SportBikeBodyMK8.png"
            },
            {
                "Name": "Inkstriker",
                "Type": "ATV",
                "ImageURL": "https://mario.wiki.gallery/images/e/eb/MK8DX_Inkstriker.png"
            },
            {
                "Name": "GLA",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/c/c2/GLA-MK8.png"
            },
            {
                "Name": "W 25 Silver Arrow",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/2/25/W25SilverArrow-MK8.png"
            },
            {
                "Name": "300 SL Roadster",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/f/f4/300SLRoadster_MK8.png"
            },
            {
                "Name": "Blue Falcon",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/f/f6/MK8BlueFalcon.png"
            },
            {
                "Name": "B-Dasher",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/1/15/ZeldaMK8Bdasher.png"
            },
            {
                "Name": "Tanooki",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/7/76/MK8_Tanooki_Buggy_Sprite.png"
            },
            {
                "Name": "Streetle",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/c/cf/MK8Streetle.png"
            },
            {
                "Name": "P-Wing",
                "Type": "Kart",
                "ImageURL": "https://mario.wiki.gallery/images/c/cd/MK8PWing.png"
            },
            {
                "Name": "Comet",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/0/0e/CometBodyMK8.png"
            },
            {
                "Name": "SportBike",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/f/fe/SportBikeBodyMK8.png"
            },
            {
                "Name": "The Duke",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/8/8a/TheDukeBodyMK8.png"
            },
            {
                "Name": "Flame Rider",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/3/31/FlameRiderBodyMK8.png"
            },
            {
                "Name": "Varmint",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/d/d0/VarmintBodyMK8.png"
            },
            {
                "Name": "Mr. Scooty",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/1/18/MrScootyBodyMK8.png"
            },
            {
                "Name": "Jet",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/1/12/JetBikeBodyMK8.png"
            },
            {
                "Name": "Yoshi",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/6/62/YoshiBikeBodyMK8.png"
            },
            {
                "Name": "Master Cycle",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/8/8a/MK8MasterCycle.png"
            },
            {
                "Name": "Master Cycle Zero",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/2/26/MK8D_Master_Cycle_Zero.png"
            },
            {
                "Name": "City Tripper",
                "Type": "Bike",
                "ImageURL": "https://mario.wiki.gallery/images/b/be/MK8_Light-Green_City_Tripper.png"
            },
            {
                "Name": "Wild Wiggler",
                "Type": "ATV",
                "ImageURL": "https://mario.wiki.gallery/images/a/aa/WildWigglerBodyMK8.png"
            },
            {
                "Name": "Teddy Buggy",
                "Type": "ATV",
                "ImageURL": "https://mario.wiki.gallery/images/f/fa/TeddyBuggyBodyMK8.png"
            },
            {
                "Name": "Bone Rattler",
                "Type": "ATV",
                "ImageURL": "https://mario.wiki.gallery/images/0/0a/MK8BoneRattler.png"
            },
            {
                "Name": "Splat Buggy",
                "Type": "ATV",
                "ImageURL": "https://mario.wiki.gallery/images/6/63/MK8DX_Splat_Buggy.png"
            }
        ],
        "Tires": [
            {
                "Name":"Standard",
                "ImageURL":"https://mario.wiki.gallery/images/a/a8/StandardTiresMK8.png"
            },
            {
                "Name":"Monster",
                "ImageURL":"https://mario.wiki.gallery/images/2/29/MonsterTiresMK8.png"
            },
            {
                "Name":"Roller",
                "ImageURL":"https://mario.wiki.gallery/images/7/76/RollerTiresMK8.png"
            },
            {
                "Name":"Slim",
                "ImageURL":"https://mario.wiki.gallery/images/f/f8/SlimTiresMK8.png"
            },
            {
                "Name":"Slick",
                "ImageURL":"https://mario.wiki.gallery/images/d/dd/SlickTiresMK8.png"
            },
            {
                "Name":"Metal",
                "ImageURL":"https://mario.wiki.gallery/images/9/96/MetalTiresMK8.png"
            },
            {
                "Name":"Button",
                "ImageURL":"https://mario.wiki.gallery/images/0/07/ButtonTiresMK8.png"
            },
            {
                "Name":"Off-Road",
                "ImageURL":"https://mario.wiki.gallery/images/2/25/Off-Road.png"
            },
            {
                "Name":"Sponge",
                "ImageURL":"https://mario.wiki.gallery/images/4/4c/SpongeTiresMK8.png"
            },
            {
                "Name":"Wood",
                "ImageURL":"https://mario.wiki.gallery/images/0/03/WoodTiresMK8.png"
            },
            {
                "Name":"Cushion",
                "ImageURL":"https://mario.wiki.gallery/images/9/92/CushionTiresMK8.png"
            },
            {
                "Name":"Blue Standard",
                "ImageURL":"https://mario.wiki.gallery/images/d/db/Blue_Standard.png"
            },
            {
                "Name":"Hot Monster",
                "ImageURL":"https://mario.wiki.gallery/images/d/d1/HotMonsterTiresMK8.png"
            },
            {
                "Name":"Azure Roller",
                "ImageURL":"https://mario.wiki.gallery/images/f/fe/AzureRollerTiresMK8.png"
            },
            {
                "Name":"Crimson Slim",
                "ImageURL":"https://mario.wiki.gallery/images/7/71/CrimsonSlimTiresMK8.png"
            },
            {
                "Name":"Cyber Slick",
                "ImageURL":"https://mario.wiki.gallery/images/2/29/CyberSlickTiresMK8.png"
            },
            {
                "Name":"Retro Off-Road",
                "ImageURL":"https://mario.wiki.gallery/images/4/48/Retro_Off-Road.png"
            },
            {
                "Name":"Gold Standard",
                "ImageURL":"https://mario.wiki.gallery/images/5/52/Gold_Tires_MK8.png"
            },
            {
                "Name":"GLA",
                "ImageURL":"https://mario.wiki.gallery/images/b/ba/GLATires-MK8.png"
            },
            {
                "Name":"Triforce",
                "ImageURL":"https://mario.wiki.gallery/images/9/9d/MK8-TriforceTires.png"
            },
            {
                "Name":"Ancient",
                "ImageURL":"https://mario.wiki.gallery/images/d/d5/MK8D_Ancient_Tires.png"
            },
            {
                "Name":"Leaf",
                "ImageURL":"https://mario.wiki.gallery/images/f/f9/Leaf_Tires_MK8.png"
            }
        ],
        "Gliders": [
            {
                "Name":"Super Glider",
                "ImageURL":"https://mario.wiki.gallery/images/a/a8/SuperGliderMK8.png"
            },
            {
                "Name":"Cloud Glider",
                "ImageURL":"https://mario.wiki.gallery/images/8/84/Cloud_Glider.png"
            },
            {
                "Name":"Wario Wing",
                "ImageURL":"https://mario.wiki.gallery/images/a/ae/WarioWingMK8.png"
            },
            {
                "Name":"Waddle Wing",
                "ImageURL":"https://mario.wiki.gallery/images/e/ef/WaddleWingMK8.png"
            },
            {
                "Name":"Peach Parasol",
                "ImageURL":"https://mario.wiki.gallery/images/6/6e/PeachParasolGliderMK8.png"
            },
            {
                "Name":"Parachute",
                "ImageURL":"https://mario.wiki.gallery/images/d/dd/ParachuteGliderMK8.png"
            },
            {
                "Name":"Parafoil",
                "ImageURL":"https://mario.wiki.gallery/images/c/c4/ParafoilGliderMK8.png"
            },
            {
                "Name":"Flower Glider",
                "ImageURL":"https://mario.wiki.gallery/images/b/b3/FlowerGliderMK8.png"
            },
            {
                "Name":"Bowser Kite",
                "ImageURL":"https://mario.wiki.gallery/images/f/f7/BowserKiteMK8.png"
            },
            {
                "Name":"Plane Glider",
                "ImageURL":"https://mario.wiki.gallery/images/c/ca/PlaneGliderMK8.png"
            },
            {
                "Name":"MKTV Parafoil",
                "ImageURL":"https://mario.wiki.gallery/images/9/96/MKTVParafoilGliderMK8.png"
            },
            {
                "Name":"Gold Glider",
                "ImageURL":"https://mario.wiki.gallery/images/1/18/GoldGliderMK8.png"
            },
            {
                "Name":"Hylian Kite",
                "ImageURL":"https://mario.wiki.gallery/images/9/9c/MK8-HylianKite.png"
            },
            {
                "Name":"Paraglider",
                "ImageURL":"https://mario.wiki.gallery/images/3/39/MK8D_Paraglider.png"
            },
            {
                "Name":"Paper Glider",
                "ImageURL":"https://mario.wiki.gallery/images/0/0e/PaperGliderIcon-MK8.png"
            }
        ]
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.randomKart.kart = this.randomizeKart();
    this.randomKart.character = this.randomizeCharacter();
    // this.randomKart.character = this.randomizeCharacter();
  }


  private randomizeKart() {
    const body = this.data.Vehicles.Bodies[Math.floor(Math.random() * this.data.Vehicles.Bodies.length)];
    const tire = this.data.Vehicles.Tires[Math.floor(Math.random() * this.data.Vehicles.Tires.length)];
    const glider = this.data.Vehicles.Gliders[Math.floor(Math.random() * this.data.Vehicles.Gliders.length)];
    const kart = {
      type: body.Type,
      body: body.Name,
      bodyURL: body.ImageURL,
      tires: tire.Name,
      tiresURL: tire.ImageURL,
      glider: glider.Name,
      gliderURL: glider.ImageURL
    };
    return kart;
  }

  private randomizeCharacter() {
    const randomNumber = Math.floor(Math.random() * this.data.Characters.length)
    const randomCharacterObject = this.data.Characters[randomNumber]
    console.log(randomCharacterObject)
    
    let character = {
      name: '',
      imageURL: ''
    };
    if (randomCharacterObject.HasAlternateColor && randomCharacterObject.AltColors != null) {
      const i = Math.floor(Math.random() * randomCharacterObject.AltColors.length)
      character = {  
        name: randomCharacterObject.AltColors[i].Name + ' ' + randomCharacterObject.Name,
        imageURL: randomCharacterObject.AltColors[i].ImageURL
      };      
    } else {
      character = {
        name: randomCharacterObject.Name,
        imageURL: randomCharacterObject.ImageURL
      }
    }
    return character;
  }
}
