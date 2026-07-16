// German content of al-Fatwā al-Ḥamawiyyah (excerpt: affirmation of Allah's ʿuluww).
module.exports = function content(orn, pal) {
  const div = orn.chapterDivider(pal);
  const mini = orn.miniRosette(pal);

  // Qur'an verse box with Arabic
  const ayah = (ar, de, ref) => `
    <div class="ayah">
      <div class="ayah-ar" lang="ar" dir="rtl">${ar}</div>
      <div class="ayah-de">${de}</div>
      <div class="ayah-ref">${mini}<span>${ref}</span></div>
    </div>`;
  // Qur'an verse box, German only (for longer passages)
  const ayahDe = (de, ref) => `
    <div class="ayah plain">
      <div class="ayah-de">${de}</div>
      <div class="ayah-ref">${mini}<span>${ref}</span></div>
    </div>`;
  // Hadith box
  const hadith = (de, ref) => `
    <div class="hadith">
      <div class="hadith-de">${de}</div>
      <div class="hadith-ref">${ref}</div>
    </div>`;
  // inline Qur'an quotation woven into running text
  const qv = (de, ref) => `<span class="qv">{&#8239;${de}&#8239;}</span>&#8202;<span class="qvref">[${ref}]</span>`;
  // section sub-heading (from the editorial margin notes)
  const shead = (t) => `<div class="shead">${orn.miniRosette(pal, pal.gold)}<span>${t}</span></div>`;

  return `
<section class="chapter">
  <div class="chapter-head">
    <div class="kicker">Von Shaykhu&#x2011;l&#x2011;Islām Ibn Taymiyyah</div>
    <h1 class="chapter-title"><span class="ct-ar big" lang="ar" dir="rtl">الفَتْوَى الحَمَوِيَّة</span><br><span class="ct-translit">al&#x2011;Fatwā al&#x2011;Ḥamawiyyah</span></h1>
    ${div}
  </div>

  <div class="bismillah" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>

  <p class="opening"><span class="dropcap">U</span>nd wenn dem so ist: So ist dieses Buch Allāhs von seinem Anfang bis zu seinem Ende, und die Sunna des Gesandten Allāhs &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; von ihrem Anfang bis zu ihrem Ende, sodann die Rede der Gefährten (Ṣaḥāba) und der Nachfolger (Tābiʿūn) in ihrer Gesamtheit, sodann die Rede aller übrigen Imame: [all dies ist] angefüllt mit dem, was entweder ausdrücklicher Wortlaut (<i>naṣṣ</i>) oder offenkundige Bedeutung (<i>ẓāhir</i>) dafür ist, dass Allāh über allem ist, erhaben über allem, dass Er über dem Thron ist und dass Er über dem Himmel ist.</p>

  ${shead('Beispiele aus dem Qurʾān für die Eigenschaften Allāhs')}

  <p>Wie zum Beispiel Seine &#8211; des Erhabenen &#8211; Aussage: ${qv('Zu Ihm steigt das gute Wort empor, und die rechtschaffene Tat hebt Er empor', 'Fāṭir 35:10')}; ${qv('Ich werde dich abberufen und dich zu Mir emporheben', 'Āl ʿImrān 3:55')}; ${qv('Fühlt ihr euch denn sicher davor, dass Wer über dem Himmel ist, die Erde mit euch versinken lässt, sodass sie ins Wanken gerät? Oder fühlt ihr euch sicher davor, dass Wer über dem Himmel ist, einen Steinsturm gegen euch sendet?', 'al-Mulk 67:16–17')}; ${qv('Nein! Vielmehr hat Allāh ihn zu Sich emporgehoben', 'an-Nisāʾ 4:158')}.</p>

  <p>Und Seine Aussage: ${qv('Die Engel und der Geist steigen zu Ihm empor', 'al-Maʿāridsch 70:4')}; ${qv('Er regelt die Angelegenheit vom Himmel zur Erde; hierauf steigt sie zu Ihm empor', 'as-Sadschda 32:5')}; ${qv('Sie fürchten ihren Herrn über ihnen', 'an-Naḥl 16:50')}.</p>

  <p>Und Seine Aussage ${qv('Hierauf erhob Er sich über den Thron (istawā)', 'an sechs Stellen')} &#8211; sowie:</p>

  ${ayah(
    'الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ',
    '„Der Allerbarmer hat sich über den Thron erhoben (<i>istawā</i>).“',
    'Ṭāhā 20:5')}

  <p>Und Seine Aussage &#8211; über den Pharao, der zu Hāmān sprach &#8211;:</p>

  ${ayahDe(
    '„O Hāmān, baue mir einen Turm, auf dass ich die Zugänge erreiche &#8211; die Zugänge zu den Himmeln &#8211;, damit ich zum Gott Mūsās emporsteige; doch wahrlich, ich halte ihn für einen Lügner.“',
    'Ghāfir 40:36–37')}

  <p>Und Seine Aussage: ${qv('Eine Herabsendung vom Allweisen, dem Lobenswürdigen', 'Fuṣṣilat 41:42')}; ${qv('herabgesandt von deinem Herrn mit der Wahrheit', 'al-Anʿām 6:114')} &#8211; und dergleichen mehr, was sich kaum ohne Mühe zählen lässt.</p>

  ${shead('Beispiele aus der Sunna für die Eigenschaften Allāhs')}

  <p>Und in den authentischen (<i>ṣaḥīḥ</i>) und guten (<i>ḥasan</i>) Überlieferungen findet sich das, was sich nur mit Mühe zählen lässt &#8211; wie etwa die Geschichte der Himmelfahrt (<i>miʿrādsch</i>) des Propheten &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; zu seinem Herrn, dem Mächtigen und Erhabenen; das Herabsteigen der Engel von Allāh, dem Erhabenen, und ihr Emporsteigen zu Ihm; und seine Aussage über die Engel, die sich bei euch bei Tag und Nacht ablösen:</p>

  ${hadith(
    '„So steigen diejenigen, die bei euch die Nacht verbracht haben, zu ihrem Herrn empor, und Er fragt sie &#8211; obwohl Er über sie besser Bescheid weiß.“',
    'Und im Ṣaḥīḥ, im Ḥadīth über die Khāridschiten, [heißt es]:')}

  ${hadith(
    '„Vertraut ihr mir nicht, wo ich doch der Vertraute Dessen bin, Der über dem Himmel ist? Mir kommt die Kunde des Himmels morgens und abends.“',
    'Und im Ḥadīth der Schutzanrufung (Ruqya), den Abū Dāwūd und andere überliefert haben:')}

  ${hadith(
    '„Unser Herr ist Allāh, Der über dem Himmel ist &#8211; geheiligt sei Dein Name. Dein Befehl gilt im Himmel und auf Erden. Wie Deine Barmherzigkeit im Himmel ist, so lasse Deine Barmherzigkeit auf Erden walten. Vergib uns unsere Sünden und Verfehlungen. Du bist der Herr der Guten. Sende herab eine Barmherzigkeit von Deiner Barmherzigkeit und eine Heilung von Deiner Heilung auf diesen Schmerz.“ Er &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; sagte: „Wenn einer von euch krank wird oder ein Bruder von ihm, so spreche er: Unser Herr ist Allāh, Der über dem Himmel ist &#8230;“',
    'Und seine Aussage im Ḥadīth der Steinböcke (al-Awʿāl):')}

  ${hadith(
    '„&#8230; und der Thron ist über diesem, und Allāh ist über Seinem Thron, und Er weiß, worin ihr euch befindet.“',
    'Überliefert von Abū Dāwūd. Und seine Aussage im Ḥadīth über das Ergreifen der Seele:')}

  ${hadith(
    '„&#8230; bis mit ihr zu dem Himmel emporgestiegen wird, in dem Allāh ist.“',
    'Und die Verse ʿAbdullāh ibn Rawāḥas &#8211; möge Allāh mit ihm zufrieden sein &#8211;, die er dem Propheten vortrug und die dieser billigte:')}

  <div class="poem"><span>Ich bezeuge, dass Allāhs Versprechen wahr ist,<br>und dass das Feuer die Bleibe der Ungläubigen ist,<br>und dass der Thron über dem Wasser schwebt,<br>und über dem Thron der Herr der Welten ist.</span></div>

  <p>Und die Verse Umayya ibn Abī aṣ&#x2011;Ṣalt aths&#x2011;Thaqafīs &#8211; die dem Propheten &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; vorgetragen wurden, und die er für gut befand und über ihn sagte: „Seine Dichtung hat geglaubt, sein Herz aber ist ungläubig geblieben“ &#8211;:</p>

  <div class="poem"><span>Verherrlicht Allāh, denn Er ist der Herrlichkeit würdig;<br>unser Herr im Himmel ist überaus groß und erhaben,<br>mit dem höchsten Bau, der den Menschen vorausging;<br>und Er hat über dem Himmel einen Thron errichtet,<br>einen erhabenen, den der Blick des Auges nicht erreicht;<br>unterhalb dessen sieht man die Engel in Reihen [gestellt].</span></div>

  <p>&#8211; und dergleichen mehr, was allein Allāh, der Erhabene, zu zählen vermag. Dies gehört zu den stärksten wörtlichen und sinngemäßen Formen der massenhaften Überlieferung (<i>tawātur</i>), die ein sicheres Wissen hervorbringen &#8211; zu den zwingendsten Formen des notwendigen Wissens &#8211;: dass der Gesandte &#8211; Allāh segne ihn und gebe ihm Frieden &#8211;, der [die Botschaft] von Allāh überbrachte, seiner Gemeinschaft, an die er gesandt wurde, kundtat, dass Allāh über dem Thron und dass Er über dem Himmel ist. Ebenso hat Allāh alle Völker &#8211; Araber wie Nichtaraber, in der Zeit der Unwissenheit (<i>Dschāhiliyya</i>) wie im Islam &#8211; von Natur aus (<i>fiṭra</i>) darauf veranlagt, außer demjenigen, den die Satane von seiner natürlichen Veranlagung abgebracht haben.</p>

  ${shead('Die Aussagen der Salaf hierzu sind zahlreich')}

  <p>Sodann gibt es von den Salaf hierzu so viele Aussagen, dass sie &#8211; würde man sie zusammentragen &#8211; Hunderte oder Tausende erreichen würden.</p>

  ${shead('Kein einziger Buchstabe widerspricht dem')}

  <p>Sodann gibt es weder im Buche Allāhs, des Mächtigen und Erhabenen, noch in der Sunna des Gesandten Allāhs &#8211; Allāh segne ihn und gebe ihm Frieden &#8211;, noch von irgendjemandem der Salaf dieser Gemeinschaft &#8211; weder von den Gefährten, noch von den Nachfolgern, noch von den Imamen, die die Zeit der Gelüste und der Spaltung erlebten &#8211; auch nur einen einzigen Buchstaben, der dem widerspricht: weder als ausdrücklichen Wortlaut noch als offenkundige Bedeutung.</p>

  <p>Und niemals hat einer von ihnen gesagt: Allāh ist nicht über dem Himmel; oder: Er ist nicht über dem Thron; oder: Er ist an jedem Ort; oder: alle Orte sind Ihm gegenüber gleich; oder: Er ist weder innerhalb der Welt noch außerhalb von ihr; weder mit ihr verbunden noch von ihr getrennt; oder: es sei nicht zulässig, sinnlich auf Ihn zu deuten &#8211; mit den Fingern und dergleichen.</p>

  <p>Vielmehr ist im Ṣaḥīḥ von Dschābir ibn ʿAbdillāh &#8211; möge Allāh mit beiden zufrieden sein &#8211; bezeugt, dass der Prophet &#8211; Allāh segne ihn und gebe ihm Frieden &#8211;, als er seine gewaltige Ansprache am Tag von ʿArafāt hielt, in der größten Versammlung, der der Gesandte Allāhs je beiwohnte, wiederholt sprach: „Habe ich [die Botschaft] nicht überbracht?“ Sie sagten: „Ja.“ Da hob er seinen Finger zum Himmel empor und richtete ihn [dann] auf sie und sagte mehr als einmal: „O Allāh, bezeuge es!“ &#8211; und dergleichen gibt es vieles.</p>

  ${shead('Wäre die Wahrheit auf der Seite der Leugner &#8230;')}

  <p>Wenn nun die Wahrheit das wäre, was diese Verneiner und Leugner der im Buch und in der Sunna feststehenden Eigenschaften mit solchen und ähnlichen Formulierungen sagen &#8211; und nicht das, was aus dem Buch und der Sunna verstanden wird, sei es dem Wortlaut oder der offenkundigen Bedeutung nach &#8211;: Wie könnte es dann bei Allāh, sodann bei Seinem Gesandten &#8211; Allāh segne ihn und gebe ihm Frieden &#8211;, sodann bei den Besten der Gemeinschaft angehen, dass sie dauernd mit dem sprechen, was dem Wortlaut oder der offenkundigen Bedeutung nach der Wahrheit <em>widerspricht</em>?! Und dass sie die Wahrheit, die zu glauben Pflicht ist, niemals klarstellen und niemals auf sie hinweisen &#8211; weder dem eindeutigen Wortlaut noch der offenkundigen Bedeutung nach &#8211;, bis dann die Nachfahren der Perser und Römer und die Sprösslinge der Juden und der Philosophen daherkommen, um der Gemeinschaft (Ummah) die richtige Glaubenslehre (<i>ʿaqīda</i>) darzulegen, die jeder Verpflichtete &#8211; oder jeder Vortreffliche &#8211; zu glauben hat?!</p>

  ${shead('Wären Buch und Sunna reiner Schaden im Fundament der Religion?')}

  <p>Wenn das, was diese Scholastiker sagen, tatsächlich der verpflichtende Glaube wäre &#8211; und man dabei zu seiner Erkenntnis allein auf die bloße Vernunft verwiesen wäre und aufgrund des Analogieschlusses der eigenen Vernunft das zurückweisen sollte, worauf Buch und Sunna dem Wortlaut oder der offenkundigen Bedeutung nach hinweisen &#8211;, dann wäre es für die Menschen unter dieser Annahme leitender und nützlicher gewesen, sie ganz ohne Buch und ohne Sunna zu lassen. Ja, das Vorhandensein von Buch und Sunna wäre dann ein reiner Schaden im Fundament der Religion.</p>

  <p>Denn die Sache läuft nach dem, was diese sagen, [in Wahrheit] darauf hinaus, [als spräche man]: Ihr, o Schar der Diener, sucht die Erkenntnis Allāhs, des Mächtigen und Erhabenen, und dessen, was Ihm an Eigenschaften &#8211; verneinend wie bestätigend &#8211; zusteht, weder aus dem Buch, noch aus der Sunna, noch auf dem Wege der Salaf dieser Gemeinschaft! Betrachtet vielmehr <em>ihr selbst</em> [die Sache]: Was ihr an Eigenschaften für Ihn als angemessen befindet, damit beschreibt Ihn &#8211; gleich ob es sich im Buch und in der Sunna findet oder nicht; und was ihr in euren Verstandeskräften nicht als Ihm angemessen befindet, damit beschreibt Ihn nicht!</p>

  <p>Sodann sind sie hier [in] zwei Gruppen [gespalten]: Die meisten von ihnen sagen: „Was eure Verstandeskräfte nicht bestätigen, das verneint!“</p>

  <p>Andere von ihnen sagen: „Nein, verhaltet euch dazu abwartend (<i>tawaqquf</i>); und was der Analogieschluss eurer Verstandeskräfte verneint &#8211; <span class="aside">jener [Verstand], in dem ihr uneiniger und widersprüchlicher seid als in jeder Uneinigkeit auf der Erde</span> &#8211;, den verneint, und zu ihm kehrt beim Meinungsunterschied zurück; denn er ist die Wahrheit, mit der ich euch [zu dienen] auferlegt habe. Und was im Buch und in der Sunna erwähnt ist und diesem euren Analogieschluss widerspricht oder etwas bestätigt, das eure Verstandeskräfte nicht erfassen, so wisset, dass Ich euch mit seiner Herabsendung [nur] geprüft habe: nicht, damit ihr die Rechtleitung aus ihm nehmt, sondern damit ihr euch bemüht, es auf abwegige Sprachformen, ungebräuchliche Ausdrücke und befremdliche Redeweisen hinauszudeuten &#8211; oder aber dazu schweigt, indem ihr das Wissen darüber Allāh überlasst (<i>tafwīḍ</i>), während ihr [zugleich] leugnet, dass es auf irgendeine der Eigenschaften hinweist.“</p>

  <p>Dies ist die Wahrheit der Sache nach der Auffassung dieser Scholastiker. Diese Rede &#8211; sah ich, dass eine Gruppe von ihnen ihren Sinn ausdrücklich ausgesprochen hat &#8211; und sie ist für ihre Gesamtheit eine unausweichliche Folge, der man nicht entrinnen kann.</p>

  ${shead('Der Inhalt dessen, worauf ihre Rede hinausläuft')}

  <p>Und ihr Inhalt ist: dass man sich durch das Buch Allāhs nicht zur Erkenntnis Allāhs leiten lässt; dass der Gesandte &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; des Lehrens und des Berichtens über die Eigenschaften Dessen, Der ihn gesandt hat, enthoben sei [d.&#8239;h. zu ihm kehrt man nicht zurück]; und dass die Menschen beim Streit das, worüber sie uneins sind, nicht auf Allāh und den Gesandten zurückführen, sondern auf das Gleiche, worauf sie sich in der Zeit der Unwissenheit befanden, und auf das Gleiche, woran sich diejenigen wenden, die nicht an die Propheten glauben &#8211; wie die Brahmanen, die Philosophen (und diese sind Götzendiener), die Magier und ein Teil der Sabäer &#8211;, auch wenn diese Zurückführung die Sache nur noch verschärft und die Uneinigkeit dadurch nicht behoben wird; denn jede Gruppe hat ihre falschen Richter (<i>ṭawāghīt</i>), an die sie sich wenden will, während ihnen doch befohlen wurde, diese zu verwerfen.</p>

  <p>Und wie sehr gleicht der Zustand dieser sich unnötig Bemühenden Seiner &#8211; des Erhabenen &#8211; Aussage:</p>

  ${ayahDe(
    '„Siehst du nicht jene, die behaupten, sie glaubten an das, was zu dir herabgesandt wurde, und an das, was vor dir herabgesandt wurde, und die sich [dennoch] vor dem Götzen (ṭāghūt) richten lassen wollen, wo ihnen doch befohlen wurde, ihn zu verwerfen? Und der Satan will sie in tiefe Irre führen. Und wenn zu ihnen gesagt wird: ‚Kommt her zu dem, was Allāh herabgesandt hat, und zum Gesandten‘, so siehst du die Heuchler sich entschieden von dir abwenden. Wie [wird es] aber [sein], wenn sie ein Unglück trifft für das, was ihre Hände vorausgeschickt haben, und sie dann zu dir kommen und bei Allāh schwören: ‚Wir wollten nichts als das Gute und Versöhnung‘?“',
    'an-Nisāʾ 4:60–62')}

  <p>Denn wenn diese zu dem gerufen werden, was Allāh vom Buch herabgesandt hat, und zum Gesandten &#8211; und der Ruf zu ihm nach seinem Tod ist der Ruf zu seiner Sunna &#8211;, so wenden sie sich davon ab und sagen: „Wir bezweckten [doch] das Gute &#8211; in Wissen und Tat &#8211; mit diesem Weg, den wir eingeschlagen haben, und die Versöhnung zwischen den Vernunftbeweisen und den Überlieferungsbeweisen.“</p>

  <p>Sodann haben sie die meisten dieser Zweifel &#8211; die sie „Beweise“ nennen &#8211; bloß von einem der Götzen der Götzendiener und Sabäer übernommen und von einigen ihrer Erben, denen doch befohlen wurde, sie zu verwerfen; oder von jemandem, der das Gleiche sagte wie sie &#8211; wegen der Ähnlichkeit ihrer Herzen &#8211;; ich meine: die Philosophen von Hind (Indien) und der Griechen, wie Aristoteles und dergleichen.</p>

  ${ayahDe(
    '„Aber nein, bei deinem Herrn! Sie glauben nicht [eher], bis sie dich über das richten lassen, was zwischen ihnen strittig ist, und danach in sich selbst keine Bedrängnis finden gegenüber dem, was du entschieden hast, und sich in voller Ergebung fügen.“',
    'an-Nisāʾ 4:65')}

  ${ayahDe(
    '„Die Menschen waren eine einzige Gemeinschaft. Da entsandte Allāh die Propheten als Verkünder froher Botschaft und als Warner und sandte mit ihnen das Buch mit der Wahrheit herab, um zwischen den Menschen zu richten über das, worüber sie uneins waren. Uneins darüber aber wurden nur diejenigen, denen es gegeben worden war, nachdem die klaren Beweise zu ihnen gekommen waren &#8211; aus Missgunst untereinander. Doch Allāh leitete die Gläubigen mit Seiner Erlaubnis zu der Wahrheit, über die sie uneins waren.“',
    'al-Baqara 2:213')}

  ${shead('Die notwendige Folge ihrer Aussage')}

  <p>Die notwendige Folge dieser Aussage ist: dass das Buch weder eine Rechtleitung für die Menschen sei, noch eine Erläuterung, noch eine Heilung für das, was in den Herzen ist, noch ein Licht, noch eine Rückkehrinstanz beim Streit &#8211; denn wir wissen mit Notwendigkeit, dass das, wovon diese sich unnötig Bemühenden behaupten, es sei die Wahrheit, die zu glauben Pflicht ist, weder vom Buch noch von der Sunna angezeigt wird, weder dem eindeutigen Wortlaut noch der offenkundigen Bedeutung nach. Das Äußerste, was der Spitzfindige / Geschickte unter ihnen vermag, ist, dies aus Seiner Aussage abzuleiten: ${qv('Und niemand ist Ihm ebenbürtig', 'al-Ichlāṣ 112:4')} sowie ${qv('Weißt du [jemanden] gleichen Namens wie Ihn?', 'Maryam 19:65')}.</p>

  <p>Und jeder Vernünftige weiß mit Notwendigkeit: Wer die Geschöpfe darauf hinweisen wollte, dass Allāh nicht über dem Thron und nicht über den Himmeln sei &#8211; und dergleichen &#8211;, [und zwar] mit Seiner Aussage ${qv('Weißt du [jemanden] gleichen Namens wie Ihn?', 'Maryam 19:65')}, der hat weit hergeholt und ist entweder ein Rätselsprecher oder ein Verschleierer, der sie nicht in klarer arabischer Sprache angesprochen hat.</p>

  <p>Und die notwendige Folge dieser Aussage ist [weiter]: dass es für die Menschen im Fundament ihrer Religion besser wäre, ohne Gesandtschaft (<i>risāla</i>) gelassen zu werden &#8211; denn ihre Rückkehrinstanz vor der Gesandtschaft und nach ihr wäre ein und dieselbe, und die Botschaft hätte sie nur an Blindheit und Irre zunehmen lassen.</p>

  <p>O gepriesen sei Allāh! Wie kommt es, dass der Gesandte &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; an keinem einzigen Tag, und keiner der Salaf dieser Gemeinschaft je gesagt hat: „Diese Verse und Überlieferungen &#8211; glaubt nicht an das, worauf sie hinweisen, sondern glaubt an das, was eure Analogien erfordern“; oder: „Glaubt dies und jenes, denn das ist die Wahrheit; und was seiner offenkundigen Bedeutung widerspricht &#8211; dessen offenkundige Bedeutung glaubt nicht“; oder: „Betrachtet sie [genau]: Was mit dem Analogieschluss eurer Verstandeskräfte übereinstimmt, das glaubt, und was nicht &#8211; dazu verhaltet euch abwartend und verneint es!“?</p>

  <div class="endflourish">${orn.miniRosette(pal, pal.gold)}</div>
</section>`;
};
