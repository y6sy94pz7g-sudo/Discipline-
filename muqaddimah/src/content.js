// German content of the book body. Returns HTML given ornament helpers.
module.exports = function content(orn, pal) {
  const div = orn.chapterDivider(pal);
  const mini = orn.miniRosette(pal);

  // Qur'an verse box: Arabic + German meaning + reference
  const ayah = (ar, de, ref) => `
    <div class="ayah">
      <div class="ayah-ar" lang="ar" dir="rtl">${ar}</div>
      <div class="ayah-de">${de}</div>
      <div class="ayah-ref">${mini}<span>${ref}</span></div>
    </div>`;

  // Hadith / narration box
  const hadith = (de, ref) => `
    <div class="hadith">
      <div class="hadith-de">${de}</div>
      <div class="hadith-ref">${ref}</div>
    </div>`;

  const fn = (n) => `<sup class="fnref" id="fnref${n}">${n}</sup>`;

  // inline Qur'an quotation woven into the running text: braces + reference
  const qv = (de, ref) => `<span class="qv">{&#8239;${de}&#8239;}</span>&#8202;<span class="qvref">[${ref}]</span>`;

  return `
<section class="chapter">
  <div class="chapter-head">
    <div class="kicker">Von Shaykhu&#x2011;l&#x2011;Islām Ibn Taymiyyah</div>
    <h1 class="chapter-title">Einführung zu<br><span class="ct-ar" lang="ar" dir="rtl">الفَتْوَى الحَمَوِيَّة</span><br><span class="ct-translit">al&#x2011;Fatwā al&#x2011;Ḥamawiyyah</span></h1>
    ${div}
  </div>

  <div class="bismillah" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>

  <p class="opening"><span class="dropcap">I</span>m Jahre 698 n.&#8239;H. wurde Shaykhu&#x2011;l&#x2011;Islām Abū l&#x2011;ʿAbbās Aḥmad ibn Taymiyyah [diese Frage] gestellt, und infolge [seiner] Antwort ereigneten sich Angelegenheiten sowie Prüfungen. Es ist eine Antwort von gewaltigem Nutzen.</p>

  <p class="speaker">Der Fragende fragte:</p>

  <p>Was sagen die Gelehrten bezüglich der Verse, welche die Eigenschaften (<i>ṣifāt</i>) [Allāhs] enthalten, wie etwa Seine Aussage &#8211; erhaben und mächtig ist Er &#8211;:</p>

  ${ayah(
    'الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ',
    '„Der Allerbarmer hat sich über den Thron erhoben (<i>istawā</i>).“',
    'Ṭāhā 20:5')}

  <p>sowie Seine Aussage &#8211; erhaben und mächtig ist Er &#8211;:</p>

  ${ayah(
    'ثُمَّ اسْتَوَىٰ إِلَى السَّمَاءِ وَهِيَ دُخَانٌ',
    '„Hierauf erhob Er sich (<i>istawā</i>) über den Himmel, während dieser noch aus Rauch bestand.“',
    'Fuṣṣilat 41:11')}

  <p>und andere Verse sowie Überlieferungen (<i>aḥādīth</i>), welche [Seine] Eigenschaften enthalten, wie etwa seine Aussage &#8211; Allāh segne ihn und gebe ihm Frieden &#8211;:</p>

  ${hadith(
    '„Wahrlich, die Herzen der Kinder Ādams befinden sich allesamt zwischen zwei Fingern von den Fingern des Allerbarmers.“' + fn(1),
    'Der Fragende führt fort:')}

  <p>und seine Aussage: „<i>al&#x2011;Dschabbār</i> [d.&#8239;h. Allāh] wird Seinen Fuß auf das Höllenfeuer setzen &#8230;“${fn(2)}, sowie ähnliche Überlieferungen [dieser Art] &#8211; und was sagen die Gelehrten [darüber]? [Bitte] gebt eine ausführliche Antwort darüber, und möget ihr belohnt werden, so Allāh will.</p>

  <p class="speaker">Shaykhu&#x2011;l&#x2011;Islām &#8211; möge Allāh ihm barmherzig sein &#8211; antwortete:</p>

  <p>Aller Lob gebührt Allāh, dem Herrn aller Welten. Unsere Aussage bezüglich [jener Texte, welche Allāhs Eigenschaften enthalten] ist das, was Allāh und Sein Gesandter gesagt haben, sowie das, was die ersten von den Auswanderern und Helfern und denjenigen, die ihnen im Guten folgten, sagten &#8211; und die rechtgeleiteten Imame nach ihnen: jene, über die sich die Muslime einig sind, dass sie rechtgeleitet waren und über ein korrektes Verständnis verfügten. Dies ist es, was allen Menschen obliegt, sei es in diesem Thema oder in anderem.</p>

  <p>Wahrlich, Allāh entsandte Muḥammad &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; mit der Rechtleitung und der wahren Religion, ${qv('um die Menschheit aus [den Schichten der] Finsternis in das Licht zu führen, mit der Erlaubnis ihres Herrn, hin zum Wege des Allmächtigen, des Lobenswürdigen', 'Ibrāhīm 14:1')}.</p>

  <p>[Allāh] bezeugte, dass Er ihn ${qv('als einen Rufer zu Allāh, mit Seiner Erlaubnis, und als eine erleuchtende Leuchte', 'al-Aḥzāb 33:46')} entsandte. Er befahl ihm zu sprechen:</p>

  ${ayah(
    'قُلْ هَٰذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ ۚ عَلَىٰ بَصِيرَةٍ أَنَا وَمَنِ اتَّبَعَنِي',
    '„Sag: Das ist mein Weg. Ich rufe zu Allāh aufgrund von sicherem Wissen, ich und wer mir folgt.“',
    'Yūsuf 12:108')}

  <p>Daher ist es intellektuell wie religiös unmöglich, dass diese erleuchtende Leuchte (d.&#8239;h. Muḥammad), die Allāh entsandte, um die Menschen aus [den Schichten der] Finsternis in das Licht zu führen, und der Er ${qv('das Buch – den Qurʾān – herabsandte, um zwischen den Menschen zu richten in dem, worüber sie uneins sind', 'al-Baqarah 2:213')} &#8211; so wie Er den Menschen befahl, Streitigkeiten in ihrer Religion auf das Buch und die Weisheit (<i>ḥikmah</i>) zurückzuführen, mit denen er entsandt wurde, wobei er zu Allāh und zu Seinem Wege aufgrund sicheren Wissens rief, mit [Allāhs] Erlaubnis, und Er [Allāh] kundtat, dass Er für ihn und seine Gemeinschaft (<i>ummah</i>) ihre Religion vollendete und Seine Gunst an ihnen vervollständigte &#8211; [aufgrund dessen und anderer Angelegenheiten] ist es gänzlich unmöglich, dass [der Prophet &#8211; Allāh segne ihn und gebe ihm Frieden &#8211;] das Thema des Glaubens an Allāh und des korrekten Wissens über Ihn unklar und mehrdeutig ließ, ohne eine klare Unterscheidung zu treffen zwischen dem, was gegenüber Allāh hinsichtlich Seiner schönen Namen und erhabenen Eigenschaften geboten ist, dem, was über Ihn zulässig ist, und dem, was es nicht ist.</p>

  <p>Wahrlich, das Wissen über [diese Dinge] ist das Fundament der Religion und die Grundlage der Rechtleitung. Es ist zugleich das Beste, was die Herzen erlangen, was die Seelen erreichen und was die Verstandeskräfte begreifen können. Wie also könnten jenes Buch (d.&#8239;h. der Qurʾān), jener Gesandte (d.&#8239;h. Muḥammad) und die Besten der Menschheit nach den Propheten (d.&#8239;h. die Gefährten) dieses Thema nicht vollständig gemeistert haben &#8211; im Glauben wie im Wort? Ebenso ist es unmöglich, dass der Prophet &#8211; Allāh segne ihn und gebe ihm Frieden &#8211;, der seine Gemeinschaft alles lehrte, sogar die Umgangsformen der Reinigung [nach dem Verrichten der Notdurft]${fn(3)}, und sprach:</p>

  ${hadith(
    '„Ich habe euch auf einer klaren, weißen [Ebene] zurückgelassen, deren Nacht wie ihr Tag ist; niemand weicht von ihr ab, außer dass er zugrunde geht.“' + fn(4),
    'und in einem weiteren authentischen Bericht:')}

  ${hadith(
    '„Allāh entsandte niemals einen Gesandten, ohne dass es diesem zur Pflicht wurde, seine Gemeinschaft auf jedes Gute hinzuweisen, das er für sie kannte, und sie vor jedem Übel zu warnen, von dem er wusste, dass es ihnen schaden würde.“' + fn(5),
    'Und Abū Dharr &#8211; möge Allāh mit ihm zufrieden sein &#8211; sagte:')}

  ${hadith(
    '„Der Gesandte Allāhs &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; starb, und es gab nicht einmal einen Vogel, der mit seinen Flügeln am Himmel schlägt, ohne dass er uns etwas Wissen darüber erwähnt hätte.“' + fn(6),
    'Und ʿUmar ibn al&#x2011;Khaṭṭāb &#8211; möge Allāh mit ihm zufrieden sein &#8211; sagte:')}

  ${hadith(
    '„Der Gesandte Allāhs &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; stand [eines Tages] unter uns auf und erwähnte die Angelegenheiten vom allerersten Anbeginn der Schöpfung an, bis dahin, dass die Bewohner des Paradieses ihre Wohnstätten betreten und die Bewohner des Höllenfeuers ihre Wohnstätten betreten. Wer es sich einprägte, prägte es sich ein, und wer es vergaß, vergaß es.“' + fn(7),
    'Berichtet von al&#x2011;Bukhārī.')}

  <p>So ist es unmöglich, dass er &#8211; nachdem er sie alles lehrte, was ihnen in der Religion nützen würde, sogar feine und genaue Angelegenheiten [wie die Umgangsformen des Toilettengangs] &#8211; es unterlassen hätte, sie zu lehren, was sie mit ihren Zungen aussprechen und mit ihren Herzen glauben sollen bezüglich ihres Herrn, Desjenigen, den sie anbeten, des Herrn aller Welten. Denn die Kenntnis über Ihn ist die höchste Erkenntnis, Seine Anbetung das edelste Ziel und das Gelangen zu Ihm der Höhepunkt dessen, was man begehrt. Vielmehr ist dies der Kern des prophetischen Rufes und das Hauptthema der göttlichen Botschaft.</p>

  <p>Wie also kann jemand, der auch nur einen Hauch von Glaube und Weisheit besitzt, annehmen, dass der Gesandte &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; dieses Thema nicht auf die beste und vollständigste Weise erklärt habe? Und da dies [gewiss] geschah, wäre es unmöglich, dass die Besten seiner Gemeinschaft und die Besten ihrer Generationen bezüglich dieses Themas nachlässig gewesen wären, indem sie ihm etwas hinzufügten oder von ihm wegnahmen. Ebenso ist es unmöglich, dass die lobenswerten Generationen &#8211; die Generation, in der der Prophet entsandt wurde, dann diejenigen, die ihnen folgten, dann diejenigen, die diesen folgten &#8211; sich der offenkundigen Wahrheit in diesem Thema nicht bewusst gewesen wären und sie nicht bekannt hätten. Denn das Gegenteil davon würde bedeuten, dass es ihnen an diesem Wissen mangelte und sie nicht darüber sprachen, oder dass sie einen Glauben hegten, der der Wahrheit widerspricht, und mit dem sprachen, was ihr entgegensteht &#8211; und beide Fälle sind, was sie betrifft, unmöglich.</p>

  <p>Was den ersten Fall angeht: Für jeden, der auch nur das geringste Maß an Leben in seinem Herzen trägt oder [den Wunsch], Wissen zu suchen oder Eifer im Gottesdienst zu haben, wäre die Untersuchung dieses Themas, das Nachforschen darüber und [das Verlangen,] die Wahrheit darüber zu erkennen, sein größtes Ziel und sein höchstes Bestreben. Was ich meine, ist die Klärung des korrekten Glaubens, den man haben muss &#8211; [nicht gemeint ist] das Streben, die genaue Beschaffenheit (d.&#8239;h. <i>kaifiyyah</i>) des Herrn und Seiner Eigenschaften zu ergründen. Reine Seelen begehren nichts sehnlicher, als Wissen über diese Sache zu besitzen, wie es durch die natürliche Veranlagung (<i>fiṭrah</i>) und den angeborenen Sinn bekannt ist. Da dies also [von Natur aus] gegenwärtig ist [in denen mit reinen Seelen] &#8211; was zu den stärksten Beweisen zählt &#8211;, wie kann man sich vorstellen, dass es bei jenen edelsten Persönlichkeiten in allen Epochen abwesend gewesen sein sollte? Dies kann kaum je beim dümmsten Menschen geschehen, beim hartnäckigsten, der sich von Allāh abwendet, und beim gierigsten unter denen, die das weltliche Leben suchen und der Erinnerung an Allāh gegenüber achtlos sind &#8211; wie also könnte es je bei ihnen (d.&#8239;h. den lobenswerten Generationen) geschehen?</p>

  <p>Und was [die <i>Salaf</i>] betrifft, einen Glauben bezüglich [Allāhs Eigenschaften] zu hegen, der der Wahrheit widerspricht, oder [etwas anderes] zu bekennen &#8211; so würde kein Muslim und kein Verständiger, der ihren Zustand kannte, dies jemals glauben. Zudem ist ihre Rede zu diesem Thema zu umfangreich, als dass man auch nur versuchen könnte, sie in dieser <i>Fatwā</i> oder in einem größeren Werk wiederzugeben. Jeder, der forscht und darin nachschaut, würde dies erkennen. Auch ist es unmöglich, dass die Spätgeborenen wissender wären als die frühen Vorfahren, wie einige Toren, die den <i>Salaf</i> nicht den ihnen gebührenden Respekt erwiesen haben, behaupteten:</p>

  <div class="pull"><span>„Der Weg der <i>Salaf</i> ist sicherer, während der Weg der <i>Khalaf</i> wissender und präziser ist.“</span></div>

  <p>Vielmehr sind sie es, die Allāh, Seinen Gesandten und diejenigen, die an Ihn mit dem wahren, erforderlichen Wissen glauben, nicht kennen.</p>

  <p>Diese Neuerer, die den Weg der <i>Khalaf</i> dem Weg der <i>Salaf</i> vorziehen, gerieten in Irrtum, indem sie glaubten, der Weg der <i>Salaf</i> bestehe lediglich im Glauben an die Wortlaute des Qurʾān und des Ḥadīth ohne Verständnis &#8211; genau wie die schriftunkundigen Leute, über die Allāh sprach:</p>

  ${ayah(
    'وَمِنْهُمْ أُمِّيُّونَ لَا يَعْلَمُونَ الْكِتَابَ إِلَّا أَمَانِيَّ',
    '„Unter ihnen [den Juden] gibt es Schriftunkundige, die die Schrift nicht kennen, sondern nur [trügerischen] Wünschen [nachhängen].“',
    'al&#x2011;Baqarah 2:78')}

  <p>[Und sie glaubten,] der Weg der <i>Khalaf</i> bestehe darin, das Verständnis aus den Texten herauszuziehen, die von ihren wörtlichen Bedeutungen abgeändert werden, indem man verschiedene Arten von Metaphern (<i>madschāzāt</i>) und ungebräuchliche fremde sprachliche Fachausdrücke verwendet.</p>

  <p>Daher ist diese falsche Annahme &#8211; deren Inhalt es ist, dass man den Islam hinter den eigenen Rücken wirft &#8211; das, was jene [falsche] Aussage hervorbrachte. Zweifellos haben sie über den Weg der <i>Salaf</i> gelogen und sind irregeleitet, indem sie dem Weg der <i>Khalaf</i> Richtigkeit zuschreiben. So haben sie beides in sich vereint: die Unwissenheit über den Weg der <i>Salaf</i> &#8211; indem sie über sie lügen &#8211; und die Torheit samt Irreleitung &#8211; indem sie dem Weg der <i>Khalaf</i> Richtigkeit zuschreiben.</p>

  <p>Und der Grund dahinter ist ihr Glaube, dass diese Texte (d.&#8239;h. der Qurʾān und die Sunnah) auf [die Wirklichkeit] keiner einzigen Eigenschaft hinweisen &#8211; gestützt auf verdorbene Zweifel, die sie mit ihren Brüdern unter den Ungläubigen teilen. Weil sie also [Allāhs] Eigenschaften für nicht existent hielten, zugleich aber [einräumten], dass diese Texte eine Bedeutung tragen müssen, schwankten sie zwischen dem bloßen Glauben (<i>īmān</i>) an den Wortlaut und dem [angeblichen] Anvertrauen [des Wissens um ihre] Bedeutung [an Allāh] (<i>tafwīḍ</i>) &#8211; was sie [fälschlich] als den Weg der <i>Salaf</i> ausgaben &#8211; und dem Verzerren der Eigenschaft hin zu anderen [Bedeutungen] mittels beschwerlicher, zwanghafter Mühe, und dies nennen sie den Weg der <i>Khalaf</i>. Infolgedessen wurde diese Falschheit zu einer Mischung aus verdorbenem Denken samt Verneinung der Texte. Denn in ihrer Verneinung [von Allāhs Eigenschaften] stützten sie sich auf verstandesmäßige [Argumente], die sie für offenkundige Beweise hielten, in Wahrheit aber nur Zweifel waren, und zur selben Zeit verzerrten sie die Texte aus ihrer eigentlichen Bedeutung.</p>

  <p>Da sie also ihre Sache auf diese zwei ungläubigen Grundannahmen bauten, war das Endergebnis, dass sie [den <i>Salaf</i>] Unwissenheit und Dummheit zuschrieben und glaubten, sie seien ein schriftunkundiges Volk gewesen &#8211; nichts weiter als rechtschaffene Laien, die keine tiefe Einsicht in die Wirklichkeiten der Erkenntnis über Allāh erlangt und die Feinheiten der göttlichen Offenbarung nicht begriffen hätten. Vielmehr seien es die „tugendhaften“ <i>Khalaf</i> gewesen, die in all dem Ansehen und eine Führungsrolle erlangten.</p>

  <p>Würde ein Mensch nun über diese Aussage nachsinnen, so fände er, dass sie der Gipfel der Unwissenheit ist &#8211; ja, der Gipfel der Irreleitung. Wie können diese späteren Generationen [wissender sein als die <i>Salaf</i>] &#8211; zumal jene, die hier als „<i>Khalaf</i>“ bezeichnet werden, eine Gruppe der <i>ahl al&#x2011;kalām</i> (Leute der spekulativen Theologie) sind, die in Angelegenheiten der Religion verwirrt und davon verblendet sind, [wahres] Wissen über Allāh zu erlangen?</p>

  <p>Und derjenige, der die äußersten Grenzen (der spekulativen Theologie) durchmessen hat, berichtete über den Endpunkt der Bestrebungen (der Theologen), als er sagte:</p>

  <div class="pull"><span>„Wahrlich, ich bin zu allen Lehrstätten [der Logiker] gereist und ließ meinen Blick zwischen diesen Orten schweifen. Doch ich sah nur Leute, die sich verwirrt das Kinn rieben oder vor Reue mit den Zähnen knirschten.“</span></div>

  <p>Vielmehr haben einige von ihnen dies gegen sich selbst eingestanden &#8211; aus ihren eigenen Aussagen, indem sie andere zitierten, oder aus dem, was sie in ihren eigenen verfassten Werken erwähnten, wie etwa die Aussage eines ihrer Anführer:</p>

  <div class="pull long"><span>„Das Endergebnis davon, den Verstand [über seine Grenzen hinaus] zu treiben, ist Stillstand, und das meiste Streben der Weltenbewohner ist Irreleitung. Unsere Seelen in unseren Leibern empfinden Fremdheit, und das Ergebnis unseres weltlichen Lebens ist nur Schaden und übles Ende. Unser ganzes Leben lang haben wir aus unserer Forschung keinen Nutzen gezogen, außer Hörensagen anzuhäufen. Ich habe über die Methoden der spekulativen Theologie und die der Philosophen nachgedacht, und ich fand, dass sie nicht den Kranken heilen, noch den Durst stillen. Und ich fand, dass der zuverlässigste Weg der Weg des Qurʾān ist. Ich las zur Bejahung: {Der Allerbarmer hat sich über den Thron erhoben (<i>istawā</i>)} und {Zu Ihm steigt das gute Wort empor} [Fāṭir 35:10]. Und ich las zur Verneinung: {Nichts ist Ihm gleich; und Er ist der Allhörende, der Allsehende} [al&#x2011;Schūrā 42:11] [sowie] {Sie aber umfassen nichts von Seinem Wissen} [Ṭāhā 20:110]. Wer also das erlebt hat, was ich erlebt habe, wird genau so [zur Erkenntnis] gelangen, wie ich gelangt bin.“</span></div>

  <p>Ein anderer von ihnen sagte:</p>

  <div class="pull"><span>„Ich habe mich auf weite Ozeane hinausgewagt und die Leute des Islam und ihr Wissen zurückgelassen. Ich habe mich in dem ergangen, was [die Gelehrten] mir verboten haben, und wenn nun mein Herr mir Seine Barmherzigkeit nicht gewährt, dann wehe dem Soundso (d.&#8239;h. ihm selbst). Und nun liege ich hier im Sterben auf der ʿaqīdah meiner Mutter.“</span></div>

  <p>Und wieder ein anderer sagte:</p>

  <div class="pull"><span>„Diejenigen, die zur Todesstunde den meisten Zweifel haben, sind die Leute der spekulativen Theologie.“</span></div>

  <p>Überdies: Würden diese Logiker, die den <i>Salaf</i> widersprechen, untersucht, so [fände man] bei ihnen kein wahres Wissen über Allāh und keine tatsächliche Kenntnis von Ihm. Vielmehr besitzen sie davon weder einen klaren Beweis, noch eine geringste Spur davon. Wie also können diese verblendeten, verminderten, nachrangigen, verwirrten, orientierungslosen Spätgeborenen wissender über Allāh und Seine Namen und Eigenschaften und genauer bezüglich Seiner Verse und Seines Wesens sein als die Ersten [im Islam] von den <i>Muhādschirūn</i>, den <i>Anṣār</i> und denjenigen, die ihnen im Guten folgten &#8211; die Erben der Propheten und die Nachfolger der Gesandten, die Wegweiser der Rechtleitung und die leitenden Leuchten [durch] die Finsternis? Jene, die das Buch (d.&#8239;h. den Qurʾān) rezitierten, umsetzten und verbreiteten, und ihretwegen ihnen Beistand und Sieg gewährt wurde; jene, von denen das Buch [lobend] sprach und die mit dem Buch sprachen; jene, denen Allāh Wissen und Weisheit gewährte in solchem Maße, dass sie über den Rest der Nachfolger der restlichen Propheten hinausragten &#8211; geschweige denn über den Rest der Nationen, die kein Buch haben.</p>

  <p>Und sie haben die wahren Erkenntnisse und die inneren Wirklichkeiten in einem Maße umfassend erfasst, dass &#8211; würde die gesamte Weisheit anderer zu der ihrigen hinzugefügt &#8211; sich jeder schämen würde, überhaupt einen Vergleich zwischen ihnen anzustellen.</p>

  <p>Ferner: Wie können die Besten der Generationen (d.&#8239;h. die <i>Salaf</i>) geringer an Wissen und Weisheit sein als diese Jünglinge &#8211; im Vergleich zu ihnen &#8211;, zumal was das Wissen über Allāh und die Urteile hinsichtlich Seiner Verse und Namen betrifft? Oder wie können die Küken der Philosophen und die Anhänger [der Leute] von Hind (Indien) und der Griechen samt ihren Erben unter den Zoroastriern, Götzendienern und den irregeleiteten Juden, Christen und Sabäern und ihresgleichen wissender sein als die Erben der Propheten und die Leute des Qurʾān und des <i>īmān</i> (Glaubens)?</p>

  <p>Ich habe daher nur deshalb mit dieser Einführung begonnen, weil derjenige, der sie fest verinnerlicht hat, wissen wird, wo die wahre Rechtleitung in diesem Thema und in anderem liegt. Ebenso wird er wissen, dass Irreleitung und Verwirrung sich nur deshalb über viele der Spätgeborenen ausgebreitet haben, weil sie das Buch Allāhs hinter ihre Rücken warfen und sich von den klaren Beweisen und der Rechtleitung abwandten, mit denen Allāh Muḥammad &#8211; Allāh segne ihn und gebe ihm Frieden &#8211; entsandte. Und auch [deshalb,] weil sie es unterließen, nach dem Wege der frühen Vorfahren und der <i>tābiʿūn</i> zu suchen, und [stattdessen] das Wissen über Allāh bei denen suchten, die Ihn nicht kannten &#8211; auf Grundlage ihres eigenen Eingeständnisses, des Zeugnisses der Gemeinschaft und unzähliger weiterer Beweise. Zudem ist es nicht mein Ziel, [eine] einzelne [Person im Besonderen zu behandeln]; ich werde jedoch von jeder Gruppe [von der irregeleiteten und der rechtgeleiteten] eine entsprechende Beschreibung geben &#8230;</p>

  <div class="endflourish">${orn.miniRosette(pal, pal.gold)}</div>

  <hr class="notes-rule">
  <section class="notes">
    <h2 class="notes-title">Anmerkungen</h2>
    <ol class="notes-list">
      <li id="fn1">Berichtet von Muslim (Nr.&#8239;2654) nach dem Ḥadīth des ʿAbdullāh ibn ʿAmr ibn al&#x2011;ʿĀṣ &#8211; möge Allāh mit beiden zufrieden sein.</li>
      <li id="fn2">Berichtet von al&#x2011;Bukhārī mit ähnlichem Wortlaut (Nr.&#8239;4849) und von Muslim (Nr.&#8239;2848) nach dem Ḥadīth des Abū Hurayrah &#8211; möge Allāh mit ihm zufrieden sein.</li>
      <li id="fn3">Berichtet von Muslim (Nr.&#8239;262) nach dem Ḥadīth des Salmān al&#x2011;Fārisī &#8211; möge Allāh mit ihm zufrieden sein.</li>
      <li id="fn4">Berichtet von Ibn Mādscha (Nr.&#8239;43), von Aḥmad in seinem <i>Musnad</i> und von Ibn Abī ʿĀṣim in seiner <i>Sunnah</i> (1/27); von Shaykh al&#x2011;Albānī als <i>ṣaḥīḥ</i> eingestuft. Siehe <i>al&#x2011;Ṣaḥīḥah</i> (2/647), Nr.&#8239;937, nach dem Ḥadīth des al&#x2011;ʿIrbāḍ ibn Sāriyah &#8211; möge Allāh mit ihm zufrieden sein.</li>
      <li id="fn5">Berichtet von Muslim (Nr.&#8239;1844) nach dem Ḥadīth des ʿAbdullāh ibn ʿAmr ibn al&#x2011;ʿĀṣ &#8211; möge Allāh mit beiden zufrieden sein.</li>
      <li id="fn6">Berichtet von Aḥmad (5/153, 162) und von Shaykh al&#x2011;Albānī in <i>al&#x2011;Ṣaḥīḥah</i> (Nr.&#8239;1803) als <i>ṣaḥīḥ</i> eingestuft.</li>
      <li id="fn7">Berichtet von al&#x2011;Bukhārī (Nr.&#8239;3192).</li>
    </ol>
  </section>
</section>`;
};
