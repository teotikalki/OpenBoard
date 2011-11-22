var txt_vesicule = "";
var txt_lysosome = "";
var txt_mitoch = "";
var txt_golgi = "";
var txt_rer = "";
var txt_noy = "";
var txt_rel = "";
var txt_adn = "";
var txt_centr = "";
var txt_rib = "";
var txt_arn = "";
var txt_nucl = "";

var lang = ""; //locale language

if(window.sankore){
    try{
        lang = sankore.locale().substr(0,2);
    } catch(e){
        lang = "en";
    }
} else 
    lang = "en";

switch(lang){
    case "en":
        txt_vesicule = 	"<h2>Vesicle<br/>Transporter</h2>"+
        "<h4>Structure:</h4><span><p>Phospholipid bilayer</p></span>"+
        "<h4>Role:</h4><span><p>Transport of proteins and other components inside the cell to the exterior (exocytosis) or inward (endocytosis).</p></span>"+
        '<h4>Operation:</h4><span><p>Transport "towed" by Protein building on the cytoskeleton.</p></span>'
						
        txt_lysosome = "<h2>Lysosome<br/>A stomach cell.</h2>"+
        "<h4>Structure:</h4><span><p>Phospholipid bilayer</p></span>"+
        "<h4>Role:</h4><span><p>a intracellular digestion with enzymes.</p></span>"+
        "<h4>Operation:</h4><span><p>Absorbes nutrient uptake or damaged cellular components by endocytosis, digest them and then distributes the results of the chemical reaction in the cell and finally expels of waste by exocytosis.</p></span>"
 
        txt_mitoch = 	"<h2>Mitochondrie<br/>Batteries</h2>"+
        "<h4>Structure:</h4><span><p>Two phospholipid bilayers called mitochondrial membranes, one external and one internal. The mitochondria contain ribosomes, ATP of DNA and other molecules.</p></span>"+
        "<h4>Role:</h4><span><p>Powerhouse of the cell.</p></span>"+
        "<h4>Operation:</h4><span><p>Energy - in the form of ATP (adenosine triphosphate) - comes from various stages of chemical reactions starting from a glucose molecule.</p></span>"
 
        txt_golgi =	"<h2>Apparatus golgi<br/>Miniature plants</h2>"+
        "<h4>Structure:</h4><span><p>Has a stack of flattened membrane saccules.</p></span>"+
        "<h4>Role:</h4><span><p>Modification of proteins during a journey through its saccules.</p></span>"+
        "<h4>Operation:</h4><span><p>Chemical reactions, including glycosylation.</p></span>"
 
        txt_rer =	"<h2>Rough endoplasmic reticulum - Tunnel</h2>"+
        "<h4>Structure:</h4><span><p>Consists of a phospholipid bilayer studded with ribosomes (an aspect <i> rough </ i>) define the light, an internal space that can be compared to a tunnel.</p></span>"+
        "<h4>Role:</h4><span><p>More specialized than the real, he participated in the transport and a finalizing the proteins that are synthesized by ribosomes.</p></span>"+
        '<h4>Operation:</h4><span><p>Proteins "fall" in the light of the RER where they are modified and displaced. They leave the RER in a vesicle membrane after it.</p></span>'
 
        txt_noy = 	"<h2>Core - The safe</h2>"+
        "<h4>Structure:</h4><span><p>Surrounded by a double membrane, that called the nuclear envelope, in places linked with the RER. These two membranes protect regular intervals formed nuclear pores. It located within the nucleolus and the DNA in the form of chromatin or chromosomes.</p></span>"+
        "<h4>Role:</h4><span><p>Storing all the genetic information necessary for a life of the cell.</p></span>"+
        "<h4>Operation:</h4><span><p>Copying of genetic information on mRNA.</p></span>"
 
        txt_rel = 	"<h2>Smooth endoplasmic reticulum - REL</h2>"+
        "<h4>Structure:</h4><span><p>Like that of the RER, with the difference that the membrane is studded with ribosomes, as its smooth <i>appearance</i>.</p></span>"+
        "<h4>Role:</h4><span><p>Phospholipid synthesis, calcium storage, transformation of certain molecules external (drugs, alcohol, ...). In some cells, the LRA also performs additional functions, such as the production of hormones, gastric acid, etc.</p></span>"+
        "<h4>Operation:</h4><span><p>It is the seat of many complex chemical reactions (eg detoxification, various syntheses).</p></span>"
 
        txt_adn =	"<h2>DNA - The Book of Life</h2>"+
        "<h4>Structure:</h4><span><p>A scale in form of the famous double helix consists of two columns sugar-phosphate-sugar-phosphate ... and whose levels are called nitrogenous bases.</p></span>"+
        "<h4>Role:</h4><span><p>DNA contains all the information needed for a life.</p></span>"+
        "<h4>Operation:</h4><span><p>All information is written using the four letters A, T, G and C. Using these combinations, it is possible to write anything useful about cell.</p></span>"

        txt_centr =	"<h2>Centrioles - Tug of chromosomes</h2>"+
        "<h4>Structure:</h4><span><p>Nine triplets of microtubules surrounded by a some number of proteins.</p></span>"+
        "<h4>Role:</h4><span><p>Separate the different chromosomes during cell division.</p></span>"+
        "<h4>Operation:</h4><span><p>Centrioles, once placed at the two poles of the cell, deploy the microtubules to the centromeres of chromosomes and pull them to them to separate them.</p></span>"
				
        txt_rib =	"<h2>Ribosome - Decoders</h2>"+
        "<h4>Structure:</h4><span><p>Formed by two subunits composed of ribosomal RNA and proteins.</p></span>"+
        "<h4>Role:</h4><span><p>The ribosome synthesizes proteins.</p></span>"+
        "<h4>Operation:</h4><span><p>A strand of mRNA (messenger) pass through the ribosome and tRNA (transfer) between the large subunit where the codon (group of three nitrogen bases) is one who is in front of the mRNA. This tRNA carries with it a specific amino acid that is added a chain already assembled.</p></span>"

        txt_arn =	"<h2>RNA - Multifunction</h2>"+
        "<h4>Structure:</h4><span><p>Very similar DNA with the difference it has only one strand and thymine (T) of DNA is replaced by uracil (U). In addition, it is chemically more stable than DNA, so it is not used for information storage, just if in long term.</p></span>"+
        "<h4>Role:</h4><span><p>Multiple, there are RNA transport, passenger, cruise, guides, satellite ...</p></span>"+
        "<h4>Operation:</h4><span><p>Copying of genetic information, the opening of the double helix of DNA, and then copying the RNA codons. It can then exit the nucleus, the DNA can not do it.</p></span>"

        txt_nucl =	"<h2>Nucleolus - Factory RNA</h2>"+
        "<h4>Structure:</h4><span><p>Composed of any membrane, a cluster of proteins and RNA.</p></span>"+
        "<h4>Role:</h4><span><p>Location of the RNA transcripts, including RNA (ribosomal), which combines with protein, will form the two subunits of ribosomes.</p></span>"+
        "<h4>Operation:</h4><span><p>Creation of a ribosome: Transcription of rRNA and protein needed (this step is performed in the cytoplasm by other ribosomes) that fall within the nucleus, association of molecules frankly formed a new ribosome, which leaves the nucleus to play its role.</p></span>"
        break;
    case "ru":
        txt_vesicule = 	"<h2>Везикула<br/>Транспортер</h2>"+
        "<h4>Структура:</h4><span><p>фосфолипидный бислой</p></span>"+
        "<h4>Роль:</h4><span><p>Транспорт белков и других элементов внутри клетки наружу (экзоцитоз) или внутрь (эндоцитоз).</p></span>"+
        '<h4>Процесс работы:</h4><span><p>Перевозит "буксируемые" белки, опираясь на цитоскелет.</p></span>'
						
        txt_lysosome = "<h2>Лизосома<br/>В желудках клетки</h2>"+
        "<h4>Структура:</h4><span><p>фосфолипидный бислой</p></span>"+
        "<h4>Роль:</h4><span><p>Внутриклеточного пищеварения с ферментами.</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Поглощение питательных веществ или поврежденных компонентов путем эндоцитоза, их переваривание, а затем распространение результатов химических реакций в клекте и, наконец, удаление отходов путем эндоцитоза.</p></span>"
 
        txt_mitoch = 	"<h2>Митохондрии<br/>Батареи</h2>"+
        "<h4>Структура:</h4><span><p>Два бифосфолипида, называемых митохондриальными мембранами, один внешний и один внутренний. Митохондрии содержат рибосомы, АТФ ДНК и другие молекулы.</p></span>"+
        "<h4>Роль:</h4><span><p>Центральные энергетические клетки.</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Энергия - в форме АТФ (аденозинтрифосфата) - является результатом различных стадий химических реакций, начиная с молекулы глюкозы.</p></span>"
 
        txt_golgi =	"<h2>Аппарат Гольджи<br/>Миниатюрные растения</h2>"+
        "<h4>Структура:</h4><span><p>Имеет стопку уплощенных мешочков мембран.</p></span>"+
        "<h4>Роль:</h4><span><p>Модификация белков во время путешествия по ее мешочкам.</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Химические реакции, в том числе гликозилирование.</p></span>"
 
        txt_rer =	"<h2>Шероховатой эндоплазматической сети - Тоннель</h2>"+
        "<h4>Структура:</h4><span><p>Состояит из фосфолипидного бислоя, усеянного рибосомами. Внутреннее пространство разграничено по свету, что можно сравнить с туннелем. (грубое <i>предположение</i>)</p></span>"+
        "<h4>Роль:</h4><span><p>Более специализированные, чем REL. Участвует в транспортировке и доработке белков, которые синтезируются рибосомами.</p></span>"+
        '<h4>Процесс работы:</h4><span><p>Белки "попадают" на свет о RER, изменяются и перемещаются. Они оставляют RER в везикуле, в конце оболочки последнего.</p></span>'
 
        txt_noy = 	"<h2>Ядро - безопасное</h2>"+
        "<h4>Структура:</h4><span><p>Окружено двойной мембраной, называемой ядерной оболочкой, в местах, связанных с RER. Эти две мембраны предохраняют ядро регулярной при формировании ядерной поры. Внутри находится ядрышко и ДНК в виде хроматина или хромосом.</p></span>"+
        "<h4>Роль:</h4><span><p>Хранение всей генетической информации, необходимой для жизни клетки.</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Транскрипция (копирования генетической информации в мРНК).</p></span>"
 
        txt_rel = 	"<h2>Гладкая эндоплазматическая сеть - REL</h2>"+
        "<h4>Структура:</h4><span><p>Как и PER, за исключением того, что мембрана усеяна рибосомами, 'гладкий внешний вид'</p></span>"+
        "<h4>Роль:</h4><span><p>Синтез фосфолипидов, кальция, хранение, переработка некоторых внешних молекул (наркотики, алкоголь, ...). В некоторых клетках, REL также выполняет дополнительные функции, такие как производство гормонов, желудочные кислоты и т.д..</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Имеет место много сложных химических реакций (например, детоксикация, различные синтезы).</p></span>"
 
        txt_adn =	"<h2>ДНК - Книга Жизни</h2>"+
        "<h4>Структура:</h4><span><p>Двойная спираль, состоящая из двух столбцов глюкоза-фосфат-глюкоза-фосфат ... уровни которых называются азотистыми основаниями.</p></span>"+
        "<h4>Роль:</h4><span><p>ДНК содержит всю информацию, необходимую для жизни.</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Вся информация записывается с помощью четырех букв A, T, G и C. С помощью этих комбинаций можно написать все, что полезно для клеток.</p></span>"

        txt_centr=	"<h2>Центриоли - Буксиры хромосом</h2>"+
        "<h4>Структура:</h4><span><p>Девять триплетов микротрубочек, окруженных белками.</p></span>"+
        "<h4>Роль:</h4><span><p>Отделение различных хромосом во время деления клетки.</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Микротрубочки развертывают центриоли, когда те  размещены на двух полюсах клетки, на центромеры хромосом и тянут их к ним, чтобы разделить их.</p></span>"
				
        txt_rib =	"<h2>Рибосома - декодеры</h2>"+
        "<h4>Структура:</h4><span><p>Сформирована из двух субъединиц: рибосомальной РНК и белков.</p></span>"+
        "<h4>Роль:</h4><span><p>Рибосомы синтезируют белки.</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Нити мРНК (мессенджер) происходит в рибосоме и тРНК (передача) между большой субъединицы, если ее кодона (группа из трех азотистых оснований) соответствует один перед мРНК. Это тРНК несет в себе определенный аминокислота, которая добавляется к цепочке уже собранном виде.</p></span>"

        txt_arn =	"<h2>РНК - многофункциональная</h2>"+
        "<h4>Структура:</h4><span><p>Очень похожа на ДНК. Кроме того, что он имеет только один берег и тимин (Т) ДНК заменяется урацил (U). Кроме того, он химически более нестабильна, чем ДНК, поэтому он не используется для хранения информации с течением времени.</p></span>"+
        "<h4>Роль:</h4><span><p>Несколько, Есть РНК транспорта, курьеров, regulateus, гиды, спутник ...</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Копирование генетической информации осуществляется через открытие двойной спирали ДНК, а затем копирование РНК кодонов. Это может затем выйти из ядра, ДНК не может сделать.</p></span>"

        txt_nucl =	"<h2>Ядрышко - фабрика РНК</h2>"+
        "<h4>Структура:</h4><span><p>Состоит из любой оболочки, скопления белков и РНК.</p></span>"+
        "<h4>Роль:</h4><span><p>Расположение транскрипта РНК, Ночной рРНК (рибосомальной), который вместе с белками, образуют две субъединицы рибосом.</p></span>"+
        "<h4>Процесс работы:</h4><span><p>Создание рибосомы: Транскрипция РНК и белков, необходимых (этот шаг выполняется в цитоплазму других рибосомы), которые входят в ядро, ассоциация молекул, образующихся в откровенной новые рибосомы, которая находится вне ядра, чтобы играть свою роль.</p></span>"
        break;
    case "fr":
        txt_vesicule = 	"<h2>Vesicule<br/>Transporteurs</h2>"+
        "<h4>Structure:</h4><span><p>Bicouche phospholipidique</p></span>"+
        "<h4>Role:</h4><span><p>Transport de proteines ou d'autres elements a l'interieur de la cellule, vers l'exterieur (exocytose) ou vers l'interieur (endocytose).</p></span>"+
        '<h4>Fonctionnement:</h4><span><p>Transporteur "remorque" par des proteines prenant appui sur le cytosquelette.</p></span>'
						
        txt_lysosome = "<h2>Lysosome<br/>Estomacs cellulaires</h2>"+
        "<h4>Structure:</h4><span><p>Bicouche phospholipidique</p></span>"+
        "<h4>Role:</h4><span><p>Digestion intra-cellulaire a l'aide d'enzymes</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>Absorption de nutriments par endocytose ou d'elements cellulaires abimes, digestion de ceux-ci, puis distribution des resultats de la reaction chimique dans la cellule et enfin expulsion des dechets par exocytose.</p></span>"
 
        txt_mitoch = 	"<h2>Mitochondrie<br/>Piles</h2>"+
        "<h4>Structure:</h4><span><p>Deux bichouches phospholipidiques appelees membranes mitochondriales, une externe et une interne. La mitochondrie contient des ribosomes, de l'ATP de l'ADN et bien d'autres molecules.</p></span>"+
        "<h4>Role:</h4><span><p>Centrale energetique de la cellule.</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>L'energie - sous forme d'ATP (adenosine triphosphate) - est issue de differentes etapes de reactions chimique partant d'une molecule de glucose.</p></span>"
 
        txt_golgi =	"<h2>Appareil de Golgi<br/>Usines miniatures</h2>"+
        "<h4>Structure:</h4><span><p>Forme d'un empilement de saccules membranaires applatis.</p></span>"+
        "<h4>Role:</h4><span><p>Modification de certaines proteines au cours d'un cheminement au travers de ses saccules.</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>Suite de reactions chimiques, notamment par glycosilation.</p></span>"
 
        txt_rer =	"<h2>Reticulum endoplasmique rugueux - Tunnel</h2>"+
        "<h4>Structure:</h4><span><p>Compose d'une bicouche phospholipidique piquetee de ribosomes (d'un aspect <i>rugueux</i>) delimitant la lumiere, un espace interne pouvant tre compare a un tunnel.</p></span>"+
        "<h4>Role:</h4><span><p>Plus specialise que le REL, il participe au transport et a la finalisation des proteines, qui sont synthetisees par les ribosomes.</p></span>"+
        '<h4>Fonctionnement:</h4><span><p>Les proteines "tombent" dans la lumiere du RER o elles sont modifiees et deplacees. Elles quittent le RER dans une vesucule issue de la membrane de ce dernier.</p></span>'
 
        txt_noy = 	"<h2>Noyau - Le coffre-fort</h2>"+
        "<h4>Structure:</h4><span><p>Entoure par une double membrane appelee enveloppe nucleaire en lien par endroits avec le RER. Ces deux membranes fusionnent a intervalles reguliers pour former les pores nucleaires. a l'interieur se trouvent le nucleole et l'ADN, sous forme de chromatine ou de chomosomes.</p></span>"+
        "<h4>Role:</h4><span><p>Stockage de la totalite des informations genetiques necessaires a la vie de la cellule.</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>Site de la transcription (copie de l'information genetique sur des ARNm).</p></span>"
 
        txt_rel = 	"<h2>Reticulum endoplasmique lisse - REL</h2>"+
        "<h4>Structure:</h4><span><p>Similaires a celle du RER, a la difference que sa membranne n'est pas parsemee de ribosomes, d'o son aspect <i>lisse</i>.</p></span>"+
        "<h4>Role:</h4><span><p>Sinthese des phospholipides,stockage du calcium, transformation de certaines molecules exterieures (medicament, alcool, ...). Dans certaines cellules, le REL remplit aussi des fonctions supplementaires, telles la production d'hormones, d'acides gastriques, etc.</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>Il est le siege de beaucoup de reactions chimiques complexes (ex: detoxification, differentes syntheses).</p></span>"
 
        txt_adn =	"<h2>ADN - Le livre de la vie</h2>"+
        "<h4>Structure:</h4><span><p>echelle a la celebre forme de double helice composee de deux colonnes sucre-phosphate-sucre-phosphate-... et dont les echelons sont apelles bases azotees.</p></span>"+
        "<h4>Role:</h4><span><p>L'ADN contient toutes les informations necessaires a la vie.</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>Toutes les informations sont ecrites a l'aide des quatre lettres A, T, G, et C. Grace a ces combinaisons, il est possible d'ecrire tout ce qui est utile a la cellule.</p></span>"

        txt_centr=	"<h2>Centrioles - Remorqueurs de choromosomes</h2>"+
        "<h4>Structure:</h4><span><p>Neuf triplets de microtubules entoures par un certain nombre de proteines.</p></span>"+
        "<h4>Role:</h4><span><p>Separer les differents chromosomes durant la division cellulaire.</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>Les centrioles, une fois places aux deux poles de la cellule, deploient des microtubules vers les centromeres des chromosomes et les tirent vers eux pour les separer.</p></span>"
				
        txt_rib =	"<h2>Ribosome - Decodeurs</h2>"+
        "<h4>Structure:</h4><span><p>Forme par deux sous-unites composees d'ARN ribosomique et de proteines.</p></span>"+
        "<h4>Role:</h4><span><p>Le ribosome synthetise les proteines.</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>Un brin d'ARNm (messager) passe dans le ribosome et un ARNt (de transfert) entre dans la grande sous-unite si son codon (groupe de trois bases azotees) correspond a celui qui est en face sur l'ARNm. Cet ARNt porte avec lui un acide amine specifique qui est ajoute a la chaine deja assemblee.</p></span>"

        txt_arn =	"<h2>ARN - Multifonction</h2>"+
        "<h4>Structure:</h4><span><p>Tres similaire a l'ADN a la difference qu'il ne possede qu'un brin et que la thymine (T) de l'ADN est remplacee par l'uracile (U). De plus, il est chimiquement plus instable que l'ADN, c'est pourquoi il n'est pas utilise pour le stockage d'informations a long terme.</p></span>"+
        "<h4>Role:</h4><span><p>Multiples, il existe des ARN de transport, messagers, regulateus, guides, satellites, ...</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>La copie d'informations genetiques se fait grace a l'ouverture de la double-helice d'ADN, puis la copie des codons sur l'ARN. Celui-ci peut alors sortir du noyau, ce que l'ADN ne peut pas faire.</p></span>"

        txt_nucl =	"<h2>Nucleole - Fabrique d'ARN</h2>"+
        "<h4>Structure:</h4><span><p>Compose d'aucune membranne, c'est un agglomerat de proteines et d'ARN.</p></span>"+
        "<h4>Role:</h4><span><p>Lieu de la transcription d'ARN, nottament d'ARNr (ribosomiques) qui, associes avec des proteines, vont former les deux sous-unites des ribosomes.</p></span>"+
        "<h4>Fonctionnement:</h4><span><p>Creation d'un ribosome: Transcription des ARNr ainsi que des proteines necessaires (cette etape est effectuee dans le cytoplasme par d'autres ribosomes) qui rentrent dans le noyau, association des molecules franchement formees en un nouveau ribosome, qui sort du noyau pour jouer son Role.</p></span>"
        break;
    default:
        txt_vesicule = 	"<h2>Vesicle<br/>Transporter</h2>"+
        "<h4>Structure:</h4><span><p>Phospholipid bilayer</p></span>"+
        "<h4>Role:</h4><span><p>Transport of proteins and other components inside the cell to the exterior (exocytosis) or inward (endocytosis).</p></span>"+
        '<h4>Operation:</h4><span><p>Transport "towed" by Protein building on the cytoskeleton.</p></span>'
						
        txt_lysosome = "<h2>Lysosome<br/>A stomach cell.</h2>"+
        "<h4>Structure:</h4><span><p>Phospholipid bilayer</p></span>"+
        "<h4>Role:</h4><span><p>a intracellular digestion with enzymes.</p></span>"+
        "<h4>Operation:</h4><span><p>Absorbes nutrient uptake or damaged cellular components by endocytosis, digest them and then distributes the results of the chemical reaction in the cell and finally expels of waste by exocytosis.</p></span>"
 
        txt_mitoch = 	"<h2>Mitochondrie<br/>Batteries</h2>"+
        "<h4>Structure:</h4><span><p>Two phospholipid bilayers called mitochondrial membranes, one external and one internal. The mitochondria contain ribosomes, ATP of DNA and other molecules.</p></span>"+
        "<h4>Role:</h4><span><p>Powerhouse of the cell.</p></span>"+
        "<h4>Operation:</h4><span><p>Energy - in the form of ATP (adenosine triphosphate) - comes from various stages of chemical reactions starting from a glucose molecule.</p></span>"
 
        txt_golgi =	"<h2>Apparatus golgi<br/>Miniature plants</h2>"+
        "<h4>Structure:</h4><span><p>Has a stack of flattened membrane saccules.</p></span>"+
        "<h4>Role:</h4><span><p>Modification of proteins during a journey through its saccules.</p></span>"+
        "<h4>Operation:</h4><span><p>Chemical reactions, including glycosylation.</p></span>"
 
        txt_rer =	"<h2>Rough endoplasmic reticulum - Tunnel</h2>"+
        "<h4>Structure:</h4><span><p>Consists of a phospholipid bilayer studded with ribosomes (an aspect <i> rough </ i>) define the light, an internal space that can be compared to a tunnel.</p></span>"+
        "<h4>Role:</h4><span><p>More specialized than the real, he participated in the transport and a finalizing the proteins that are synthesized by ribosomes.</p></span>"+
        '<h4>Operation:</h4><span><p>Proteins "fall" in the light of the RER where they are modified and displaced. They leave the RER in a vesicle membrane after it.</p></span>'
 
        txt_noy = 	"<h2>Core - The safe</h2>"+
        "<h4>Structure:</h4><span><p>Surrounded by a double membrane, that called the nuclear envelope, in places linked with the RER. These two membranes protect regular intervals formed nuclear pores. It located within the nucleolus and the DNA in the form of chromatin or chromosomes.</p></span>"+
        "<h4>Role:</h4><span><p>Storing all the genetic information necessary for a life of the cell.</p></span>"+
        "<h4>Operation:</h4><span><p>Copying of genetic information on mRNA.</p></span>"
 
        txt_rel = 	"<h2>Smooth endoplasmic reticulum - REL</h2>"+
        "<h4>Structure:</h4><span><p>Like that of the RER, with the difference that the membrane is studded with ribosomes, as its smooth <i>appearance</i>.</p></span>"+
        "<h4>Role:</h4><span><p>Phospholipid synthesis, calcium storage, transformation of certain molecules external (drugs, alcohol, ...). In some cells, the LRA also performs additional functions, such as the production of hormones, gastric acid, etc.</p></span>"+
        "<h4>Operation:</h4><span><p>It is the seat of many complex chemical reactions (eg detoxification, various syntheses).</p></span>"
 
        txt_adn =	"<h2>DNA - The Book of Life</h2>"+
        "<h4>Structure:</h4><span><p>A scale in form of the famous double helix consists of two columns sugar-phosphate-sugar-phosphate ... and whose levels are called nitrogenous bases.</p></span>"+
        "<h4>Role:</h4><span><p>DNA contains all the information needed for a life.</p></span>"+
        "<h4>Operation:</h4><span><p>All information is written using the four letters A, T, G and C. Using these combinations, it is possible to write anything useful about cell.</p></span>"

        txt_centr =	"<h2>Centrioles - Tug of chromosomes</h2>"+
        "<h4>Structure:</h4><span><p>Nine triplets of microtubules surrounded by a some number of proteins.</p></span>"+
        "<h4>Role:</h4><span><p>Separate the different chromosomes during cell division.</p></span>"+
        "<h4>Operation:</h4><span><p>Centrioles, once placed at the two poles of the cell, deploy the microtubules to the centromeres of chromosomes and pull them to them to separate them.</p></span>"
				
        txt_rib =	"<h2>Ribosome - Decoders</h2>"+
        "<h4>Structure:</h4><span><p>Formed by two subunits composed of ribosomal RNA and proteins.</p></span>"+
        "<h4>Role:</h4><span><p>The ribosome synthesizes proteins.</p></span>"+
        "<h4>Operation:</h4><span><p>A strand of mRNA (messenger) pass through the ribosome and tRNA (transfer) between the large subunit where the codon (group of three nitrogen bases) is one who is in front of the mRNA. This tRNA carries with it a specific amino acid that is added a chain already assembled.</p></span>"

        txt_arn =	"<h2>RNA - Multifunction</h2>"+
        "<h4>Structure:</h4><span><p>Very similar DNA with the difference it has only one strand and thymine (T) of DNA is replaced by uracil (U). In addition, it is chemically more stable than DNA, so it is not used for information storage, just if in long term.</p></span>"+
        "<h4>Role:</h4><span><p>Multiple, there are RNA transport, passenger, cruise, guides, satellite ...</p></span>"+
        "<h4>Operation:</h4><span><p>Copying of genetic information, the opening of the double helix of DNA, and then copying the RNA codons. It can then exit the nucleus, the DNA can not do it.</p></span>"

        txt_nucl =	"<h2>Nucleolus - Factory RNA</h2>"+
        "<h4>Structure:</h4><span><p>Composed of any membrane, a cluster of proteins and RNA.</p></span>"+
        "<h4>Role:</h4><span><p>Location of the RNA transcripts, including RNA (ribosomal), which combines with protein, will form the two subunits of ribosomes.</p></span>"+
        "<h4>Operation:</h4><span><p>Creation of a ribosome: Transcription of rRNA and protein needed (this step is performed in the cytoplasm by other ribosomes) that fall within the nucleus, association of molecules frankly formed a new ribosome, which leaves the nucleus to play its role.</p></span>"
        break;
}

	