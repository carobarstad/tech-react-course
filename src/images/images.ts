type tCharNames = {
  [key: string]: string;
};

const images: tCharNames = {
  'Luke Skywalker':
    'https://pbs.twimg.com/profile_images/680269671073988608/9seMbtxC_400x400.jpg',
  'C-3PO':
    'https://pbs.twimg.com/profile_images/718849712720384000/3Qo35wtx_400x400.jpg',
  'R2-D2':
    'https://pbs.twimg.com/profile_images/3303885663/d80bbd27448860d78cc8a6f77236dcf6_400x400.jpeg',
  'Darth Vader':
    'https://pbs.twimg.com/profile_images/593845726809038848/zfDFTJeo_400x400.jpg',
  'Leia Organa':
    'https://pbs.twimg.com/profile_images/687466521237430273/cTTYn2hW_400x400.jpg',
  'Owen Lars':
    'https://pbs.twimg.com/profile_images/378800000212665351/b0f0e4834e23b9d91467690fc548b990_400x400.jpeg',
  'Beru Whitesun lars':
    'https://i.pinimg.com/1200x/29/71/e3/2971e3eaaac6d31679aa0339f0b0c11b.jpg',
  'R5-D4':
    'https://www.renderhub.com/ardera/r5-d4-astromech-droid/r5-d4-astromech-droid-01.jpg',
  'Biggs Darklighter':
    'https://vignette.wikia.nocookie.net/starwars/images/4/43/Biggs.png/revision/latest?cb=20130305010633',
  'Obi-Wan Kenobi':
    'https://www.denofgeek.com/wp-content/uploads/2019/08/star-wars-obi-wan-kenobi-1-scaled.jpg?resize=768%2C432',
  'Anakin Skywalker':
    'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest/top-crop/width/360/height/360?cb=20130621175844',
  'Wilhuff Tarkin':
    'https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png',
  Chewbacca:
    'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest/top-crop/width/360/height/360?cb=20190830144754',
  'Han Solo':
    'https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C960',
  Greedo:
    'https://pyxis.nymag.com/v1/imgs/c20/4ac/55db7c77cf4a0ed214af58f3201f5281bf-12-greedo-star-wars.rsocial.w1200.jpg',
  'Jabba Desilijic Tiure':
    'https://www.superherodb.com/pictures2/portraits/10/050/10469.jpg?v=1462392271',
  'Wedge Antilles':
    'https://lumiere-a.akamaihd.net/v1/images/databank_wedgeantilles_01_169_b8185dce.jpeg?region=0%2C0%2C1560%2C878',
  'Jek Tono Porkins': 'https://i.redd.it/kfvbjz2ootu41.jpg',
  Yoda:
    'https://premium.vgc.no/v2/images/926371db-eaff-4445-920c-7f3973c2d497?fit=crop&h=1152&w=2048&s=a06abf4b34b44a8b46eb4761de76a606dea4e503',
  Palpatine:
    'https://theopinionarcade.com/wp-content/uploads/2019/04/Star-Wars-Palpatine-1-1155x600.png',
  'Boba Fett':
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/FettbobaJB.png/220px-FettbobaJB.png',
  'IG-88':
    'https://bbts1.azureedge.net/images/p/full/2020/03/d5d9761f-5a92-4344-9949-a3d42daabd97.jpg',
  Bossk:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdBMfZe9mpURUzBiGVMGCixqt8DksmIx574Q&usqp=CAU',
  'Lando Calrissian':
    'https://www.denofgeek.com/wp-content/uploads/2017/12/star-wars-lando-calrissian.jpg?fit=1400%2C700',
  Lobot:
    'https://jedinet.com/wp-content/uploads/2017/03/FeaturedImage-3-1280x720.png',
  Ackbar:
    'https://lumiere-a.akamaihd.net/v1/images/databank_ackbar_01_169_55137220.jpeg?region=0%2C49%2C1560%2C780',
  'Mon Mothma':
    'https://pm1.narvii.com/6617/7dce029dfbe9efde492801296e23622cc3407801_00.jpg',
  'Arvel Crynyd':
    'https://vignette.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20120113223349',
  'Wicket Systri Warrick':
    'https://vignette.wikia.nocookie.net/starwars/images/9/95/Deej.jpg/revision/latest/top-crop/width/360/height/450?cb=20071126024245',
  'Nien Nunb':
    'https://images.immediate.co.uk/production/volatile/sites/3/2020/01/Screen-Shot-2020-01-11-at-12.52.38-f33ecaf.png?quality=90&resize=620,413',
  'Qui-Gon Jinn':
    'https://vignette.wikia.nocookie.net/swfanon/images/d/d6/QuiGonPortrait-SWE.jpg/revision/latest?cb=20130205204403',
  'Nute Gunray':
    'https://i.pinimg.com/originals/df/5c/f6/df5cf639545edd64db2ab5cc1a958abf.jpg',
  'Finis Valorum':
    'https://lumiere-a.akamaihd.net/v1/images/valorum_a31904f4.jpeg?region=94%2C0%2C1910%2C955',
  'Padmé Amidala':
    'https://1.bp.blogspot.com/-5HEc0_ceYMY/XURSmvXhAMI/AAAAAAAAC2w/tlPwuiUkMa4pQ0edRk14KVoYaNXW2YT7QCLcBGAs/s1600/Reina_Amidala.jpg',
  'Jar Jar Binks':
    'https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg?region=0%2C0%2C1560%2C878&width=960',
  'Roos Tarpals':
    'https://vignette.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg/revision/latest?cb=20180218034913',
  'Rugor Nass':
    'https://vignette.wikia.nocookie.net/starwars/images/5/57/BossNass_laugh.jpg/revision/latest/scale-to-width-down/340?cb=20071231010036',
  'Ric Olié':
    'https://pbs.twimg.com/profile_images/668792539588255746/Fo7og3ll_400x400.jpg',
  Watto:
    'https://preview.redd.it/x8khygd3g1541.png?width=400&format=png&auto=webp&s=ce8ca70ab7ba09c96db791b4884b1507a43827e8',
  Sebulba:
    'https://lumiere-a.akamaihd.net/v1/images/sebulba_1f3fe180.jpeg?region=240%2C0%2C1376%2C1380&width=960',
  'Quarsh Panaka':
    'https://starwarsprequelappreciationsociety.files.wordpress.com/2017/12/databank_captainpanaka_01_169_6a3ccac5.jpeg',
  'Shmi Skywalker':
    'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/07/Shmi-Skywalker-in-The-Phantom-Menace.jpg',
  'Darth Maul':
    'https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20140209162228',
  'Bib Fortuna':
    'https://vignette.wikia.nocookie.net/starwars/images/3/33/BibFortunaHS-ROTJ.png/revision/latest?cb=20130326042806',
  'Ayla Secura':
    'https://vignette.wikia.nocookie.net/starwars/images/4/4d/Aayla_Secura_SWE.png/revision/latest/top-crop/width/360/height/360?cb=20180121065247',
  'Ratts Tyerel':
    'https://vignette.wikia.nocookie.net/starwars/images/0/05/Finalmoments.jpg/revision/latest?cb=20060614131230',
  'Dud Bolt':
    'https://vignette.wikia.nocookie.net/starwars/images/b/b0/Dud_Bolt.jpg/revision/latest/top-crop/width/360/height/450?cb=20061130092516',
  Gasgano:
    'https://vignette.wikia.nocookie.net/starwars/images/5/57/GasganoHS-SWE.jpg/revision/latest/top-crop/width/360/height/360?cb=20120112024006',
  'Ben Quadinaros': 'https://i.redd.it/mzt2c4dyrjvy.png',
  'Mace Windu':
    'https://vignette.wikia.nocookie.net/starwars/images/4/41/Mace_Windu_SWI38.png/revision/latest/top-crop/width/360/height/450?cb=20190424132547',
  'Ki-Adi-Mundi':
    'https://static.wikia.nocookie.net/headhuntersholosuite/images/7/79/Ki-Adi-Mundi.jpg/revision/latest?cb=20190223224114',
  'Kit Fisto':
    'https://pm1.narvii.com/7114/db5e4f4263c09ad13432a8e0a120f441fc218a1dr1-732-530v2_00.jpg',
  'Eeth Koth':
    'https://vignette.wikia.nocookie.net/starwars/images/2/28/Eeth_Koth_TPM.png/revision/latest?cb=20131103212106',
  'Adi Gallia':
    'https://vignette.wikia.nocookie.net/starwars/images/b/ba/AdiGallia.jpg/revision/latest?cb=20080126123820',
  'Saesee Tiin':
    'https://i.pinimg.com/originals/e6/37/d3/e637d3e2bb0400ceac248cc8a5bdfc39.jpg',
  'Yarael Poof':
    'https://vignette.wikia.nocookie.net/starwars/images/9/96/Yarael_Poof.png/revision/latest?cb=20131112121643',
  'Plo Koon':
    'https://vignette.wikia.nocookie.net/starwars/images/9/96/Yarael_Poof.png/revision/latest?cb=20131112121643',
  'Mas Amedda':
    'https://vignette1.wikia.nocookie.net/starwars/images/3/3f/Mas12432.jpg/revision/latest?cb=20130913002346',
  'Gregar Typho':
    'https://lumiere-a.akamaihd.net/v1/images/databank_captainpanaka_01_169_6a3ccac5.jpeg?region=341%2C0%2C878%2C878',
  Cordé:
    'https://vignette.wikia.nocookie.net/starwars/images/b/b6/Cord%C3%A9_-_SW_Card_Trader.png/revision/latest?cb=20160713053607',
  'Cliegg Lars':
    'https://vignette.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest/top-crop/width/360/height/450?cb=20180513065414',
  'Poggle the Lesser':
    'https://vignette.wikia.nocookie.net/starwars/images/7/79/Poggle_Geo.jpg/revision/latest?cb=20080118201719',
  'Luminara Unduli':
    'https://lumiere-a.akamaihd.net/v1/images/luminara-unduli-1-retina_1824949d.jpeg?region=0%2C0%2C1200%2C713',
  'Barriss Offee':
    'https://vignette.wikia.nocookie.net/starwars/images/3/37/Barrisprofile2.jpg/revision/latest?cb=20070728014608',
  Dormé:
    'https://vignette.wikia.nocookie.net/swfanon/images/4/45/475px-Dormesenate.jpg/revision/latest?cb=20090128225949',
  Dooku:
    'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2019%2F10%2FSTARWARS_EP2_25445_L-900x0.jpg',
  'Bail Prestor Organa':
    'https://upload.wikimedia.org/wikipedia/en/d/db/BailOrgana.jpeg',
  'Jango Fett':
    'https://vignette.wikia.nocookie.net/star-wars-legends/images/1/11/JangoFett-SWE.jpg/revision/latest/scale-to-width-down/340?cb=20181113063213',
  'Zam Wesell':
    'https://pbs.twimg.com/profile_images/1224485251189223424/KSi-SWDk_400x400.jpg',
  'Dexter Jettster':
    'https://i.pinimg.com/236x/de/8e/c1/de8ec16c05a08bc02d58587c508e7d52.jpg',
  'Lama Su':
    'https://vignette.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg/revision/latest/top-crop/width/720/height/900?cb=20080117165735',
  'Taun We':
    'https://i.pinimg.com/originals/75/c5/cf/75c5cfb89b671c48b5e098128f0d4856.jpg',
  'Jocasta Nu':
    'https://lumiere-a.akamaihd.net/v1/images/jocasta-nu_a3b32f08.jpeg?region=0%2C60%2C2244%2C1122',
  'R4-P17':
    'https://i.pinimg.com/600x315/e1/7e/d6/e17ed6c97e6d82e18cf647cb46f3b89b.jpg',
  'Wat Tambor':
    'https://lumiere-a.akamaihd.net/v1/images/databank_emirwattambor_01_169_9528ba0f.jpeg?region=0%2C19%2C1560%2C780',
  'San Hill':
    'https://vignette.wikia.nocookie.net/swfanon/images/8/8a/3429_plageuis.jpg/revision/latest/top-crop/width/360/height/450?cb=20110308151336',
  'Shaak Ti':
    'https://lumiere-a.akamaihd.net/v1/images/shaak_ti_9523e7c7.jpeg?region=241%2C0%2C1438%2C809&width=960',
  Grievous:
    'https://gaming-fans.com/wp-content/uploads/2019/02/grievous_800.jpg',
  Tarfful:
    'https://lumiere-a.akamaihd.net/v1/images/tarrful_f20d3412.jpeg?region=359%2C0%2C1136%2C639&width=960',
  'Raymus Antilles':
    'https://lh3.googleusercontent.com/proxy/iPDkbokNv_HOuwdA7B4FM6jHBM9Rdu7rCEAOThqtDwibQGzdaU9rzOkZJd_r_cC9rKD6JawDaZjozHZBpaf60-rmYHoycTYY2dYteA',
  'Sly Moore':
    'https://vignette.wikia.nocookie.net/starwars/images/e/ef/Sly_Moore_SWTumblr.png/revision/latest?cb=20160630050416',
  'Tion Medon':
    'https://vignette.wikia.nocookie.net/starwars/images/e/e8/TionMedonchron.jpg/revision/latest?cb=20070120141520'
};

export default images;
