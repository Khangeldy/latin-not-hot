import converter from './latinize'

it('Кириллицидан латынға дұрыс аудару тестері', () => {
  const source = `Дәл осы күнде қазақтың ішінде кімді жақсы көріп, кімді қадірлеймін деп ойладым.

Байды қадірлейін десең, бай жоқ. Бай болса, өз басының, өз малының еркі өзінде болмас па еді? Ешбір байдың өз малының еркі өзінде жоқ. Кей бай өзі біреумен күш таластырамын деп, жүз кісіге қорғалауықтығынан жалынып, малын үлестіріп жүр. Ойлайды: жалынтып бердім деп, ақымақтығынан. Жоқ, өзі жалынып беріп жүр. Қайыр да емес, мырзалық та емес, өз елімен, өз жерімен ойраңдасып, ойсыздарға қойнын ашып, малын шашып жүр. Кей байлар, елдегі құттылар, сүттілер берекелесе алмаған соң, кеселді қулар көбейіп кетіп, көп қорқытып, іздеген нәрсесі жоқ, еріксіз кім болса соған жеміт болып жүр.

Мырзаларды қадірлейін десең, осы күнде анық мырза елде жоқ, мал бергіш мырза иттен көп. Біреу бір пайдама келтірем деп мырза болып жүр. Біреулер к...не құрым киізді тұзға малшып тыққан соң есі шығып, мырза болып, еріксіз кім болса соған талтайып емізіп жүр.

Болыс пен биді құрметтейін десең, құдайдың өзі берген болыстық пен билік елде жоқ. Сатып алған, жалынып, бас ұрып алған болыстық пенен биліктің ешбір қасиеті жоқ.

Мықтыны құрметтейін десең, жаманшылыққа елдің бәрі мықты, жақсылыққа мықты кісі елде жоқ. Есті кісіні тауып құрметтейін десең, әділет, ұят, нысапқа есті кісі елде жоқ. Қулық, сұмдық, арамдық, амалға елдің бәрі де есті. Ғаріп-қасар бишараны құрметтейін десең, жатқан түйеге міне алмаса да, ол момындыққа есеп емес. Егер мінерлік жайы болса, бірдемені ептеп ілерлік те жайы бар.

Енді қалды қу мен сұм, олар өзі де қуартпай, суалтпай тыныштық көрер емес.

Жә, кімді сүйдік, кімнің тілеуін тіледік? Өзі құрттанып шашылған болыс-билер тұра тұрсын. Енді, әлбәттә, амал жоқ, момындығынан «Ырыс баққан дау бақпас» деген мақалмен боламын деп, бергенінен жаға алмай, жарымын беріп, жарымын тыныштығымен баға алмай, ұры, залым, қуларға жеміт болып жүрген шын момын байларды аямасаң һәм соның тілеуін тілемесең болмайды. Сонан басқаны таба алмадым.`


  expect(converter(source)).toBe(`Da'l osy ku'nde qazaqtyn' is'inde kimdi jaqsy ko'rip, kimdi qadirlei'min dep oi'ladym.

Bai'dy qadirlei'in desen', bai' joq. Bai' bolsa, o'z basynyn', o'z malynyn' erki o'zinde bolmas pa edi? Es'bir bai'dyn' o'z malynyn' erki o'zinde joq. Kei' bai' o'zi birey'men ku's' talastyramyn dep, ju'z kisige qorg'alay'yqtyg'ynan jalynyp, malyn u'lestirip ju'r. Oi'lai'dy: jalyntyp berdim dep, aqymaqtyg'ynan. Joq, o'zi jalynyp berip ju'r. Qai'yr da emes, myrzalyq ta emes, o'z elimen, o'z jerimen oi'ran'dasyp, oi'syzdarg'a qoi'nyn as'yp, malyn s'as'yp ju'r. Kei' bai'lar, eldegi quttylar, su'ttiler berekelese almag'an son', keseldi qy'lar ko'bei'ip ketip, ko'p qorqytyp, izdegen na'rsesi joq, eriksiz kim bolsa sog'an jemit bolyp ju'r.

Myrzalardy qadirlei'in desen', osy ku'nde anyq myrza elde joq, mal bergis' myrza i'tten ko'p. Birey' bir pai'dama keltirem dep myrza bolyp ju'r. Birey'ler k...ne qurym ki'izdi tuzg'a mals'yp tyqqan son' esi s'yg'yp, myrza bolyp, eriksiz kim bolsa sog'an taltai'yp emizip ju'r.

Bolys pen bi'di qurmettei'in desen', qudai'dyn' o'zi bergen bolystyq pen bi'lik elde joq. Satyp alg'an, jalynyp, bas uryp alg'an bolystyq penen bi'liktin' es'bir qasi'eti joq.

Myqtyny qurmettei'in desen', jamans'ylyqqa eldin' ba'ri myqty, jaqsylyqqa myqty kisi elde joq. Esti kisini tay'yp qurmettei'in desen', a'dilet, ui'at, nysapqa esti kisi elde joq. Qy'lyq, sumdyq, aramdyq, amalg'a eldin' ba'ri de esti. G'arip-qasar bi's'arany qurmettei'in desen', jatqan tu'i'ege mine almasa da, ol momyndyqqa esep emes. Eger minerlik jai'y bolsa, birdemeni eptep ilerlik te jai'y bar.

Endi qaldy qy' men sum, olar o'zi de qy'artpai', sy'altpai' tynys'tyq ko'rer emes.

Ja', kimdi su'i'dik, kimnin' tiley'in tiledik? O'zi qurttanyp s'as'ylg'an bolys-bi'ler tura tursyn. Endi, a'lba'tta', amal joq, momyndyg'ynan «Yrys baqqan day' baqpas» degen maqalmen bolamyn dep, bergeninen jag'a almai', jarymyn berip, jarymyn tynys'tyg'ymen bag'a almai', ury, zalym, qy'larg'a jemit bolyp ju'rgen s'yn momyn bai'lardy ai'amasan' ha'm sonyn' tiley'in tilemesen' bolmai'dy. Sonan basqany taba almadym.`)

  expect(convertor('объект')).toBe('obekt')
})
