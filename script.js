window.onload = function() {
  document.getElementsByClassName("btn-notes")[0].addEventListener("click", (e) => {
    e.target.className = "btn-notes active";
    document.getElementsByClassName("btn-text")[0].className = "btn-text";
    showNotes();
  });
  document.getElementsByClassName("btn-text")[0].addEventListener("click", (e) => {
    e.target.className = "btn-text active";
    document.getElementsByClassName("btn-notes")[0].className = "btn-notes";
    showText();
  });
}
function showNotes() {
  document.getElementById("content").innerHTML = `
  <c>Vocabulary</c>
<h1>Chapter 12.1</h1>
<b>Imperialism</b> - When a nation gains new land<br>
<b>Racism</b> - a belief that race is a fundamental determinant of human traits and capacities, and that racial differences produce a natural inherent superiority of a particular race.<br>
<b>Direct Rule</b> - When government elites are replaced by new officials brought from the colonizing nation<br>
<b>Colony</b> - People living in a new area, but still connected to the colonizers government<br>
<b>Protectorate</b> - A political group of people that depend on another group for protection<br>
<b>Social Darwinism</b> -<br>
<b>Indirect Rule</b> - When government elites from the colonized keep their authority and status. This type of rule had many benefits, including being cheaper (didn't have to train new officials), access to natural resources easier, and affected the local(colonized) culture less.<br>
<b>Sphere of Influence p.253</b> - A foreign area given exclusive rights (like trading and mining)<br>
<b>Economic Imperialism (look it up...)</b> - Getting new economic benefits from other colonies/countries without having to take them over.<br>
<b>Exploit</b> - Taking advantage of a person, or something. Usually a nation taking advantage of natural resources to open up there own markets.<br>
<b>Paternalism (look it up...)</b> When a government attempts to influence their own people to keep them safe and healthy<br>
<b>Assimilation (look it up...)</b> - When separate groups of people start to share their culture with each other and combine<br>
<b>Cash crops~ (look it up...)</b> - A crop farmed primarily for their value<br>
<b>14.A. How and why did each of the following nations attempt to colonize?<br>
14.B. What were the challenges they faced?</b><br>
Britain in Singapore & Burma (Myanmar), Great Britain colonized. Singapore had no challenges, while Burma had many. Difficult terrain consisting of rocky mountains and the government’s military defended once, but lost the second time.
France in Vietnam (Indochina), France colonized. The only challenge was Great Britain, as they were attempting to monopolize trade of resources including rice and rubber.
Thailand (Siam), France and Great Britain attempted to colonize Thailand, but they ended up agreeing to make Thailand a buffer zone, so neutral.
U.S. (Philippines)?  Spain colonized first, but then the US took over. The US had to defeat Spain’s forces to take over the Philippines. The natives revolted because they didn’t want to be under US rule, and Japan seeked interest.
<img src="table.png"/>

<h1>Chapter 12.2</h1>
<b>annex</b> - A city or country incorporated into an existing political unit<br>
<b>Muhammad Ali</b> - An 1805 officer part of the Ottoman army who brought Egypt into the modern world. He modernized the army, starting a public school system, and created small businesses that built ships and produced textiles and munitions.<br>
<b>Dr. Livingstone</b> - A 27-year-old medical missionary who explored Africa in 1841. He walked and sometimes traveled by canoe, traveling through unknown areas.<br>
<b>Henry Stanley</b> - A young journalist, who took over the work of Dr. Livingstone. He did not like Africa, but still explored.<br>
<b>King Leopold II</b> - The “driving force” of the colonization of Central Africa. He wanted an empire in Africa. <br>
<b>Berlin Conference</b> - Germany attempted to colonize unclaimed parts of East Africa, but British was also interested. The Berlin Conference was set up to settle the conflicting claims. British and Germany were officially recognized for there claims.<br>
<b>Boers</b> - A.K.A. Afrikaners, descendants of the original Dutch settlers. They occupied Cape Town and nearby areas in South Africa since the 1600s. However, there land was taken away by the British during the Napoleonic Wars.<br>
<b>Indigenous (natives) Zulu</b> - Frequent battlers against the Boers. They set up there own empire under the ruler Shaka. The Zulu remained powerful even after Shaka died. As the British took over Cape Town, where the Boers settled, they ended up taking over Zulu as well.<br>
<b>Boer War</b> - Lasted from 1899 to 1902, where the Boers (Afrikaners of Cape Town) resisted against the British. British responded by burning crops and forcing over a hundred thousand women and children into detention camps. Many thousands of those moved died of a lack of food. The British army won, with a peace treaty being signed in 1902.<br>
<b>Identify 2 nations in Africa that remained free of imperialist colonization?</b><br>
- Liberia (homeland for former slaves in the US) & Ethiopia

<h1>Chapter 12.3</h1>
<b>Sepoys</b> - British power increased as Mogul rulers left. The British gave power to the British East India Company so they could be involved in political and military affairs of India. They also hired Indian soldiers to protect their interests in their regions. The Indian soldiers eventually rebelled in the Sepoy Rebellion.<br>
<b>Sepoy Rebellion</b> - Sepoys distrusted the British, which ended up in the Sepoys revolting. A cause was that the rifle cartridges were greased with cow and pig fat, and each was sacred to the Hindus and the Muslims. While to the Sepoys, if their lips touch the grease, they would be “polluted”. Then, at an army post the Sepoys refused to load the cartridges and were charged with mutiny, publicly humiliated, and put in prison. Because of this. the others who were not charged yet got enraged and started killing European men, women, and children. Soon other Indians joined.<br>
<b>Raj</b> - Meaning rule in Hindi. The British rule in India from 1858 to 1947. Ended when the control of the government was moved to nations in India and Pakistan. Most Indians were servants to British colonialists. Many British people did not like being in contact with the Indians so they chose to live in different homes. During their rule, more railroads were made which increased manufacturing and agriculture.<br>
<b>Indian National Congress (INC)</b> - The INC called for the government process to be shared. Created by a group of Indians who were convinced that relying on British goodwill was futile. Also, the group sought out independence for every Indian regardless of their religious beliefs/background, or class.<br>
<b>Muslim League</b> - Many leaders only expressed concerns with their own religion/culture which conflicted with what the INC was all about. So, the Muslim League was created to represent the interests of Muslims inside of the Indian society.<br>
<b>“Jewel in the crown”</b> - As a result of rebellion to the British, the Parliament took power from the East India Company and moved it to the British government. In 1876 Britain's Queen Victoria took Empress of India. The people of India were her colonial subjects now, and she called India her “Jewel in the Crown.”<br>
<b>Mahatma Gandhi</b> - A young Hindu who fought for India’s struggles for independence. Became a lawyer and served Indian workers in South Africa. There he learned about the racial exploitation of Indians. Then, he pushed British with a movement to improve/fix the exploitation and conditions of Indians. This soon led to Indian independence.<br>
<b>Rabindranath Tagore</b> - An Indian author who won the Nobel Prize in Literature in 1913. He was a social reformer, spiritual leader, educator, philosopher, singer, painter, and international spokesperson. He set up a school that became an international university at his estate.<br>

<h1>Chapter 12.4</h1>
<b>Results of Spanish American War?</b> The United States intervened in the late 1800s during the Spanish American War. Cuba revolted against Spanish rule, in which Spanish destroyed them. This shocked the Americans and so they went to war against the Spanish, creating the Spanish American War. <br>
<b>Roosevelt Corollary</b> - Roosevelt made America more involved in Latin America. During his presidency European nations threatened war with Santo Domingo to collect debts owed. Roosevelt claimed that he would intervene and protect Latin American over any misconduct, which would include the debts they owed. It took a treaty to end the war, which made Cuba a protectorate and Puerto Rico was annexed to the United States.<br>
<b>Monroe Doctrine</b> - A warning to European nations stating that if they try and colonize the United States, the US would retaliate.<br>
<b>Panama Canal</b> - President Roosevelt supported a potential revolt in which would allow Panama to become independent from Colombia. Because of the support, the United States gained control of what became known as the Panama Canal, a 10-mile strip of land through Panama. The river connects from the Atlantic ocean to the Pacific ocean.<br>

<h1>Chapter 13.1</h1>
<b>Describe the Qing Dynasty</b> - The Qing Dynasty was the peek of power in China during the 1800s. However, almost a century later, the Qing Dynasty fell. Corruption and incompetence mixed with the massive increase in population growth caused food shortages. At the same time external pressure was being applied by the west due to advances in technology. <br>
<b>Opium War</b> - The British East India Company sponsored the growth of opium in northern India. The produced opium was then sent to Chinese markets. Because opium is highly addictive, the demand increased dramatically. China traded silver to the British for opium. China responded by telling the British government to stop. The British refused to stop, and so China put up guards to force the British traders to give them their opium. The British then responded with war.<br>
<b>Extraterritorial Rights</b> - When the British accepted the Treaty of Nanjing, five coastal ports were to be opened for British trade. In each port, Europeans had there own areas in which they would have there own laws. This became known as Extraterritorial Rights.<br>
<b>Taiping Rebellion</b> - The Chinese peasants rebelled because the government failed to fix internal problems. The peasants captured Yongan and then Nanjing, the second biggest city. Thousands of men, women, and children were killed. For over 10 years the rebellion continued, but started to fall. <br>
<b>“Self-Strengthening” movement</b> - Because of the decline in the Qing dynasty, officials who wanted reform wanted a new policy known as “self-strengthening”. The policy states that China should keep its core values while advancing there technology to the same level as the western nations.<br>
<b>Spheres of Influence</b> - Areas where exclusive privileges, like trading, are given to foreign nations. Warlords after the Tai Ping Rebellion started giving foregin nations exclusive rights in return for money.<br>
<b>Open Door Policy</b> - A United States policy stating that nations with exclusive rights in China should not set tariffs and respect equal trading to not give unfair advantages to their own citizens. <br>
<b>Boxer Rebellion</b> - Boxer was a name given to the members of the Society of Harmonious Fists. The secret organization practiced “shadowboxing”, which the members believed that imaginary boxes would protect themselves from bullets. The members were upset by the economy of the Chinese and the foreigners taking over. They really disliked Christian missionaries. The members killed tons of missionaries and Chinese Christians. As a result, an army of 20,000 people (British, French, German, Russian, American, and Japanese) attacked back. The government was as weak as it would ever get after the rebellion.<br>

<h1>Chapter 13.2</h1>
<b>Provincial</b> - The local government. When the Boxer Rebellion concluded, China tried to rebuild itself. They decided to start using a new education system from the West, and dropped an examination system. Then assemblies were created at the local governments.<br>
<b>Sino-Japanese War AND results</b> - China supported Korea while Japan supported the rebels. A treaty was signed stating that China and Japan would not interfere with there military’s. Then, peasants inside Korea started to rebel and so China sent there military in the help. Japan saw there interference, which violated there treaty, and so they sent in there own military. Japan was far more modernized than China was and in turn, Japan won, taking over Korea.<br>
<b>Sun Yat-sen:  Three People's Principles</b> - Sun Yat-sen believed that nobody could govern during the Qing dynasty as it was falling. He also believed that China should follow the West. Sun created the Three People’s Principles, a three-stage process. Starting with a takeover by the military. Then he would prepare the Chinese for democracy. Finally, he would call for a democracy to be established.<br>
<b>Revolution of 1911</b> - Sun Yat-sen followers revolted in central China without Sun Yat-sen. Because the government was too weak, the dynasty collapsed. This paved the way for Sun Yat-sen’s Three People’s Principles to take place. However, Sun Yat-sen couldn’t create a new government as he didn’t have the power too. Instead, General Yuan Shigai became leader since he controlled the army. Sun Yat-sen believed that they had ended imperial rule and created a new revolution, but there was no order, no government. <br>
<b>Guomindang (Kuomintang)</b> - Sun Yat-sen’s party. General Yuan Shigai wanted to be a dictator, and so what he wanted conflicted with what Sun Yat-sen’s party wanted. Therefor, Yuan destroyed the new parliament, which caused a rebellion. The rebellion didn’t work, so Sun Yat-sen left Japan to hide.<br>
<b>Commodities</b> - Marketable goods that are mass produced, mined, or agriculturally grown. In the mid 1800s European traders moved into China. Industry, trade, and markets grew as oil, copper, salt, and tea appeared. Production increased, transportation became more reliable and quicker, and a foundation for the economy started. The economy grew rapidly as China modernized.<br>
<b>How did Westerners affect China’s economy?</b> - Westerners modernized China. New transportation and communication methods were developed, and China was opened to the world for trade and markets.<br>

<c>In Class Notes</c>
Monday, January 25th -<br>
<br>
Scramble for Africa (Race to colonize Africa among the European natiosn)<br>
<br>
BIG IDEAS -<br>
EXPLOITATION<br>
* Rubber - Belgium exploited rubber from Africa and made Africans work hard for the Rubber [CONGO] - MAJOR INDUSTRIAL INGREDIENT<br>
- Conditions were very brutal<br>
- Hands and feet cut off to show what happened if you disobeyed/didn't work hard (Didn't meet the collection quota)<br>
The native new about Rubber but not<br>
<br>
Powerful countries were losing money<br>
<br>
5 things that rubber can be used for in a war situation<br>
- Tires (Vehicles)<br>
- Bandages<br>
- Clothing/Uniforms/GEAR/Shoes<br>
- Industrial bands/belts<br>
<br>
Charles Goodyear<br>
<br>
Most Land<br>
-------------<br>
1. Britain (Close with France)<br>
2. France<br>
3. Germany<br>
4. Italy<br>
5. Belgium (Close with Portugal)<br>
6. Portugal<br>
7. Spain<br>
-------------<br>
Least Land<br>
<br>
India<br>
Canada<br>
Egypt<br>
<br>
Suez Canal - Built<br>
<br>
Jamaika<br>
Ireland<br>
Malta<br>
Boers Land<br>
Cape Colon<br>
Australia<br>
Cyphrus<br>
New Zealand<br>
Gibralter<br>
<br>
The Sun Never Sets On The British Empire - Great Britain is spread out all over the world, so the sun will always shine on some GB territory<br>
<br>
12.2 Africa Before European Domination<br>
Population -<br>
- 100s of ethnic/linguistic groups<br>
- AND traditional religion (some converts)<br>
- RANGE of large empires to small tribes<br>
<br>
<br>
afueras - ciudad<br>
casa - apartmento<br>
doce - five<br>
cuatro - three<br>
cuatro - three<br>
uno - three<br>
tres - two<br>
Si, cesped - Si<br>
sofa, television, sillas(chairs) - couch tv fireplace<br>
Mediana - Mediana<br>
<br>
Zachary McClements<br>
<br>
<br>
rubber, Goodyear, King Leopold II, Alice Harris, children with limbs cut-off...<br>
- Goodyear kickstarted the revolution<br>
- Rubber from trees<br>
- Goodyear trys to change the chemical structure of rubber to make it stronger and more useful<br>
- For 5 years he finds nothing, and then breakthrough, he adds sulfur (vulcanization), resulting in the rubber being tough like leather but flexible<br>
- Almost every machine relies on rubber, hundreds of parts on cars<br>
- Demand skyrockets<br>
- Over 2 billion rubber plants in the Congo<br>
- Konsala, village raided, feet and hands of his children cut off<br>
- King Leopold ran the congo as his own estate, people tapped for rubber and he lined his pockets, exploited the people<br>
- 10 million Congos die under his rule, people beat for rubber<br>
- Harris wants to change the exploitation, by telling the world about what happened.<br>
- Children had there hands and feet cut off as warnings<br>
- Changed the world<br>
<br>
Friday January 29th -<br>
- Mr Pearson is a Penguins Fan<br>
<br>
US History Options -<br>
1. Regular US History<br>
2. AP US History (National exam in may)<br>
3. US Studies (English + US History)<br>
4. AP Studies (AP English + AP US History + AP Exams)<br>
5. Phsycology (Brain)<br>
6. Sociology (Human nature)<br>
7. International Diplomacy (Middle East)<br>
<br>
- Paternalism [When colonizers considered natives as children needing the colonizer]<br>
 Ideas:<br>
  - Trying to make the people safer and healthier<br>
  - Limits freedom for the peoples own good<br>
  - White supremacy<br>
  - Male leader/power over others<br>
  - Father figure<br>
  - Bravery and strength<br>
  - Parent scolding (looking down upon) their children<br>
  - Patronizing (talking down on you)<br>
<br>
  - Colonizers protecting natives<br>
  - Stunts growth w/ the natives / nation<br>
  - Provides for needs, but limits freedom<br>
  - Insulting because natives may be able to rule<br>
  - Culture is challenged, religion, language, etc.<br>
<br>
Analyzing Imperial Motives<br>
Political -<br>
Economic - Labour, Economic System, Markets<br>
Social - Lifestyle, Gender, Classes, Inequality, Slavery<br>
Cultural - Relgion, Language, Ideology, Social Darwinism<br>
<br>
Religious Motives: spread Christianity<br>
- Spread European values + moral beliefs<br>
- Educate natives (culture)<br>
- End slave trade by educating + converting<br>
<br>
Economic Motives:<br>
- Desire to make money, expand + control trade<br>
<br>
Political Motives: desire to gain power<br>
- Expand territory, land, power<br>
- Use military force, gain prestige<br>
- Boost national pride/security<br>
- My nation is better than your nation<br>
<br>
Exploratory Motives: discover the "unknown" w/ new technologies<br>
- Conduct scientific medical (re)search<br>
- Adventure to investigate new lands/people<br>
<br>
A - Economic & Exploratory<br>
B - Cultural(Religious) &<br>
C - Political & Cultural(Religious)<br>
D - ?<br>
E - Economic<br>
F - Exploratory<br>
G - Cultural & Political<br>
H - Religious<br>
I - Political? (Political Cartoon)<br>
J - Economic<br>
K - Political<br>
L - Economic & Political? (Political Cartoon)<br>
M - Economic & Political<br>
N -<br>
O -<br>
<br>
Monday Febuary 1st -<br>
1. Quick Vocab Quiz Tomorrow (12.3)<br>
<br>
[!] You HAVE to take US History next year [!]<br>
[!] Febuary 10th Schedules are due [!]<br>
<br>
             Ganhi Train Scene in South Africa 1893<br>
- Colored attorney in South Africa (born in India and sent to England for degree)<br>
- Mohandas K Gondey (Called Coolie/Kaffer from the conductor)<br>
  - Coolie - an unskilled native laborer in India, China, and some other Asian countries.<br>
  - Kaffer - used to refer to populations originating from the interior of Africa. Insulting/offensive<br>
- Thrown out for being colored<br>
- Racism (Against attorney, called black but wasn't)<br>
  - Even though you may not actually be black<br>
- Segregation<br>
  - Seperated by race, by law are allowed to be seperated<br>
- Discrimination, African/Black worker treaty poorly (Being friendly)<br>
- Conductor discriminating against worker<br>
- Why could he not sit in first class with a ticket?<br>
- Why were South Africans more closed against races than london?<br>
- British colonized India<br>
- India trading firm (India is involved in business with Africa, and Ganhi is representing that trade company)<br>
- South Africans, White, British was only 19% of the population... the rest are native blacks.<br>
<br>
Apartheid - Government sanctioned discrimination/segregation<br>
<br>
Effects of Indian Imperialism<br>
- "The sun never sets on the British Empire" - Includes India, the sun will ALWAYS be on British territory<br>
- Tea, Indigo, Coffee, Cotton, and Jute(Makes Rope for Sailing[Sails, anchors])<br>
1. Industrial Revolution happened in India<br>
2. As the world's workshop, Britain needed resources<br>
3. When they went into India, they built railroads to transport goods (Difficult terrain)<br>
4. Plantation crops supplied raw materials<br>
<br>
Positive of Imperialization = Modernization<br>
<br>
Wednesday Febuary 3rd -<br>
- Cape Colony = British South Africa<br>
- "Effects of Imperialism in India"<br>
- Cotton is KING in the 1830s in the USA (Cant grow in Britain)<br>
<br>
What happens to the food supply for the Indians if the agricultural focus is on cash crops for export to support GB?<br>
- The food supply goes down<br>
- Rice, Spices and Vegetables<br>
<br>
1850s: Crimean War(Black sea) cut off Russian Jute supply to Scotland<br>
1860s: US Civil War cut off British cotton supplies<br>
India saved the GB textitle economy<br>
- Supplied opium for GB trade with China for tea<br>
- 300 million people, new market for GB goods ("Jewel in the Crown")<br>
<br>
Slide 6: Economic interests use military tactics to take over<br>
* Sepoys - Indian soldiers<br>
* Regulated by the British goverment (Although very little interference)<br>
<br>
Reading on The Sepoy Mutiny<br>
Pig/beef fat on the bullets of guns which caused the Sepoy Mutiny<br>
<br>
<br>
Monday Febuary 8th -<br>
<br>
The Self-Strengthening Movement<br>
- "Use the barbarians to control the barbarians"<br>
Three Stages:<br>
1. Military, educational, and diplomatic reform<br>
  - Establishment of Foreign Affairs office<br>
    * Foreign language school<br>
  - Emphasis on scientific education<br>
2. Trade, industry, and agricultural reform<br>
  - Installation of railroads and telegraphs<br>
  - Assistance to Chinese industry (government gave money)<br>
3. Military and light industry<br>
  - Military officers sent abroad<br>
<br>
Treaty Ports<br>
- Ports that were forced opens by "unequal" treaties<br>
- Many treaty ports develop entire sectors for foreign residents<br>
- Foreign diplomats, merchants, businessmen, and refugees<br>
- Many cities become very westernized<br>
- Shanghai becomes the largest population and most vibrant<br>
<br>
- Western styled carriages (Mainly Europeans and wealthy Chinese)<br>
- (Western Indian?) army marching down the street<br>
<br>
Spheres of Influence<br>
- European powers and Japan divided China into areas over which they had control<br>
- Gained by treaties or negotiations with warlords<br>
<br>
The Boxer Rebellion (1897-1900)<br>
- Originally an anti-Manchu organization<br>
- 1897-Began attacking Christians<br>
- January 1900-Empress Dowager allies with Boxers (They both hated Foreigers)<br>
- Foreign diplomats and others trapped in Beijing in 1900<br>
- International army relives them<br>
  * Japanese the largest contingent<br>
<br>
(Chinese) Sino-Japanese War (1894-1895)<br>
- Fought for control of Korea<br>
  * Coal and iron<br>
  * Korea "a dagger pointed at the heart of Japan"<br>
- Japan won decisively<br>
  * Further weakened Qing<br>
  * Japan recognized as world power<br>
- Treaty of Shimonoseki<br>
  * Korean independence<br>
  * Taiwan to Japan<br>
    # China claims Diaoyu/Senkaku islands part of Taiwan<br>
    # Japan claims to have annexed-them separately<br>
<br>
Ending question:<br>
If you wanted the Qing Dynasty to end, what would you do?<br>
<br>
Tuesday, January 26th - <br>
<br>
400 years Africa kept Europe out<br>
<br>
Up to 1870s: Trade, Africa still controlled the land<br>
<br>
Europeans couldn't do the interior<br>
- Rivers<br>
- Jungles<br>
- Malaria<br>
<br>
Africa had technology, but Europe experienced the Industrial Revolution<br>
<br>
Power shift from 1500s to 1600s<br>
<br>
Dr. Livingstone<br>
- Christian missionary<br>
- Late 1860s<br>
<br>
Belgium King Leopold II - commissioned(paid) Stanley to find Livingstone<br>
- Treasties w/ local chiefs "gave" Leopold control of lands<br>
- "MOTIVE": establish colony to abolish slavery (false) + promote Christianity<br>
- King Leopold forced natives to collect rubber sap<br>
RESULT<br>
- Belgian gov't. took colony from Leopold<br>
- other European countries started to claim parts of Africa<br>
<br>
Berlin Conference 1884-85<br>
<br>
Thursday January 28th -<br>
Announcments:<br>
a. 13.1 vocabulary is due Wednesday Feb 3rd (4 terms)<br>
b. What factors influence the decline of the Chinese dynasty<br>
c. Shang Zhou Qin, Sui Tang Song Yuan Ming, Reupblic, Maoze Dong<br>
<br>
Ching last Chinese dynasty<br>
"Study guide coming soon to a folder near you" ;D<br>
<br>
Congo Exploration initiates Belgium's rule in Africa<br>
"MOTIVES" weren't nessecarily true<br>
King Leopold lied about abolishing slavery but did promote Christianity<br>
<br>
Berlin Conference 1884-85<br>
- Made to settle conflicting claims between European countries<br>
- Recognized British and Germany<br>
- Formal stage of the "Scramble for Africa"... NO AFRICANS present<br>
<br>
European Imperial Motives: The White Man's Burden<br>
- Social Motives - ideological & religious<br>
  - Ideological based on cultural values<br>
- The White Man's Burden - Poem<br>
  - belief in a superior white race,<br>
  - Others = "primitive"... Europeans should "civilize others" in the world<br>
- Social Darwinism "survival of the fittest"<br>
  - cultural<br>
  - physical<br>
  - intellectual superiority<br>
<br>
"To seek another's profit, And work another's gain" - Africans being exploited for rubber<br>
Exploitation, tricked by the King Leopold, no rights<br>
<br>
"The savage wars of peace-- Fill full the mouth of Famine... bid the sickness cease" - The wars against the Africans, how the Africans had an advantage due to being immune to famine that the European nations have never seen before<br>
<br>
"And reap his old reward: The blame of those ye better," - Taking advantage and taking what isn't/shouldn't be yours, exploitation<br>
<br>
"Take up the White Man's burden" - The burden white men face<br>
"Send forth the best ye breed--" Send your son away from home to military, they HAD to colonize (making an excuse to exploit)<br>
"To mark them with your living and with your dead" - Make an impact<br>
Number 5 area - Exercism (Religious thing to get a demon out of someones body)<br>
<br>
Rudyard Kipling - <br>
- British poet<br>
- Born and grew up in India until 6<br>
- Moved to England for an education and then moved back<br>
- Parents were missionaries (Bad relationship with them)<br>
- In 1894 wrote the Jungle book, in 1899 he wrote The Whites Man Burden, which was printed on (American), magazines and distrubuted (EXTREMELY POPULAR), in 1908 he won the Noble Prize for Literature, response to America invading the Phillipines<br>
<br>
Class opens with the word "Paternalism"<br>
<br>
Test on Febuary 16th (Imperialism is very important)<br>
<br>
Thursday Febuary 4th -<br>
FYI: On question 7 of The Whites Man Burden<br>
<br>
1793 - Decline of the Qing Dynasty - Macartney Mission<br>
1. The Dynasty ruled China from 1644-1911, which was the last imperial dynasty<br>
2. Late 18th century (1700s) it began to weaken due to Internal/External factors<br>
3. In the mid 19th century (1800s) the Qing undertook reforms to save itself<br>
4. Rebellions and war ultimately caused its collapse<br>
<br>
The Chinese context -<br>
For much of the preceding 2000 years China was more technologically and economically advanced than the west<br>
- Inventions: Wheelbarrow, paper, gunpowder, paper money, accurate compasses<br>
- The west did eventually take over China in terms of technology<br>
  - British was far more advanced in gunpowder tech<br>
- China still had sophisticated markets<br>
<br>
The Macartney Mission -<br>
- In the late 18th century Britain wanted China to permit them to trade more freely. Specifically the British King, George III wanted:<br>
  - More ports opened<br>
  - Allow a permanent embassy in Beijing<br>
  - An island to use as a "way station" for British (Stopping point for repairs, fresh food etc)<br>
- King George III sent Lord Macartney, an experienced diplomat to open negotiations in 1793<br>
- Macartney was permitted to submit a letter from King George II to Emperor Qianlong, and invited to attend a banquet for Qianlongs 83rd birthday<br>
<br>
- Trouble began when his hosts (people taking Macartney to the emperor) told Macartney he would have to make the customary kowtow before the emperor<br>
  - In Britain it was customary to kneel and bow your head before the king<br>
  - There are several stories about what actually happened (did he kneel or do the kowpow)<br>
  - We know that even though he seemed good-natured about it the emperor was displeased<br>
<br>
- Despite this cultural disagreement, Qianlong provided hospitality and gifts<br>
<br>
Group role-playing activity: British delegations ot Emperor Qianlong<br>
<br>
Delegates - are people you send to represent you to request something<br>
<br>
Most widely spoken language then and now is Mandarin<br>
<br>
Required names to remember: <br>
<br>
Populations<br>
England 1800 (~9 million)<br>
Europe 1800 (~150 million)<br>
Qing China 1811 (~360 million)<br>
USA 2020 (~330 million)<br>
<br>
Majority of The Qing Dynasty<br>
97% of the China population are of Han ethnicity<br>
Manchus are from Manchuria (North East China)<br>
In 1644 they successfully captured Beijing and established the Qing Dynasty<br>
- They required all Chinese men to wear their hair in the traditional Manchu style, shaved on the top and with a long braid called a queu<br>
<br>
How the Chinese ruling viewed the world -<br>
- Called their empire Zhongguo (Center Kingdom, or Middle Kingdom)<br>
- The emperor was referred to as Tian Zi (Son of Heaven)<br>
- China had a tributary (smaller river that flows into a larger one) system with its neighbors (China was the primary kingdom/entity with neighbors who were smaller, such as NK/SK)<br>
<br>
Foreign Trade in China<br>
- China was not afraid of foreign trade, but trade was limited to one port, Canton in southern China (The Canton system)<br>
  - Foreign merchants could only sell to approved trading firms known as hongs<br>
- The west didn't produce much that China wanted<br>
- It is speculated that the Chinese limited trade to one port because they were aware of British activities in India<br>
<br>
Emperor Qianlong - Reigned from 1735-96 AD (60 years)<br>
<br>
Friday Febuary 5th - <br>
The Opium Wars<br>
- 1st Opium War, 1839-1842<br>
  - Britain forced China to sing the Treaty of Nanjing in 1842<br>
- 2nd Opium War 1856-60<br>
  - Britain and France forced China to open more ports<br>
  - British troops burned the Summer Palace<br>
<br>
After the second Opium War, interior trade ports started to open up<br>
<br>
The British decided to burn The Summer Palace after 1860<br>
<br>
The Tai Ping Rebellion - 1850-1864<br>
- 20 Million People Died<br>
- As many deaths as World War I<br>
Causes of the Tai Ping Rebellion<br>
- Hong Xiuquan received a pamphlet from a Christian missionary in Canton in 1836<br>
- In 1837 Hong has a nervous breakdown and a dream<br>
  - He went to heaven and found an old man with a glorious beard who introducted him to his older brother<br>
  - He got a sword and descended after an army of demons[metaphor for Manchu's])<br>
- In 1843 he read the pamphlet again after his friend told him too<br>
- Hong came to believe that he was Jesus' younger brother<br>
- In 1851 Hong declares the "Heavenly Kingdom of Transcendent Peace"<br>
- Economic distress caused many peasants to join his movement<br>
<br>
Captured Nanjing in 1853<br>
<br>
The Tai Pings wanted an end to Manchu rule, common land, and elimination of traditional Chinese beliefs<br>
<br>
Consquences -<br>
- Further weakening of the Qing Dynasty<br>
  - Other countries took advantage of<br>
- Beginnings of "Warlords" (Local (strongmen )government leaders who are taking power for themselves, or local wealthy business men/land owners)<br>
- Mass destruction<br>
<br>
Wednesday Febuary 10th -<br>
Self-strengthening movement - Chinese attempting to modernize by adapting to western technology<br>
- Internal sabotage<br>
  - By Empress Dowager Cixi and conservative officials<br>
- Discredited after Sino-Japanese War defeat<br>
<br>
Extraterritoriality - Citizen of one country, living in another, but subject to laws of there own country. British citizens living near the ports in China were subject to British laws instead of China's<br>
- Foreign residents in some areas of China not subject to Chinese laws<br>
  - In foreign areas of treaty ports for example<br>
- Foreign powers thought Chinese punishment to be too harsh<br>
  - Both Cultural and social<br>
<br>
Open Door Policy - <br>
- Proposed by US<br>
  - Countries that this was sent to didn't respond, however did not say no<br>
- Gave all foreign powers equal trading rights<br>
- Protected Chinese sovereignty<br>
<br>
Balance of Trade and Balance of Power<br>
- Foreign powers wanted:<br>
  - Access to Chinese markets<br>
  - Security (Security from ones competitors and favors)<br>
<br>
Manchu Abdication (Resignation), Sun Yat-sen, and the Failed Republic<br>
- What you need to know<br>
  - Emperor Puyi took the throne in 1908<br>
    - He was 3 years old<br>
  - Provincial assemblies created in 1909<br>
  - Ruled until 1911, about 6 years old<br>
<br>
Sun Yat-sen<br>
- Born near CAnton/Guangzhou<br>
- Followed his brother and studied in Hawaii as a teenager<br>
- Returned to China, went to medical school in Hong Kong<br>
  - Exposed to Western ideas as Britain controls Hong Kong<br>
- Baptized in 1883<br>
- Proposed reform in 1894<br>
  - Believed that the self-strengthening movement was not enough<br>
- Tried to take over Cnaton in 1895<br>
  - Attempt failed, 16 year exile<br>
  - There was a rat in his organization<br>
<br>
Sun Yat-sen and the Revolution of 1911<br>
- Elites in Britain, France, USA, and Japan gave $$$<br>
- Organized TEN failed rebellions<br>
- October 10th (10 10), 1911 Rebellion Begins<br>
  - Wasn't planned (Planned rebellions failed)<br>
  - Secret reovlutionaries in Hongco army<br>
    - Building bombs, one accidently exploded<br>
    - List of revolutionaries in the army<br>
    - Because of this they attacked first and took control of the city<br>
  - Sun Yat-sen was in Denver at the time<br>
    - Found out about the rebellion in the newspaper<br>
  - Other provinces soon declared independence<br>
    - No longer part of the Qing Dynasty<br>
<br>
Sun Yat-sen Returns<br>
- Continues fundraising abroad before going back to China<br>
- Elected provisional(placeholder) president by the national assembly<br>
- Knows his government is weak with little military power<br>
- Enter.... Yuan Shikai (Yarn Shikai)<br>
<br>
Yuan Shikai<br>
- The Qing sent him to put down the revolution, but he demanded power from the Qing instead<br>
- Then made a deal with Sun Yat-sen: Yuan would become president<br>
- Emperor Puyi resigns<br>
- Soon Yuan began acting like an emperor<br>
- Sun Yat-sen forms Guomindang party to oppose Yuan<br>
- Yuan dissolves National Assembly<br>
- Yuan forced to resign in 1916<br>
  - Internal dissatisfaction<br>
  - Japanese aggression<br>
- Centralized authority gone, warlord era begins<br>
<br>
Warlords - Local strongmen that control certain areas becuase they have the power too<br>
<br>
Sun Yat-sen's Three People's Principles<br>
- Nationalism (Desire by the people to have there own nation states)<br>
  - Opposition to the Manchus and foreign imperialism<br>
- Rights of the People<br>
  - Sometimes translated as "Democracy"<br>
- Livelihood<br>
  - Most vague of the three principles<br>
    - Land reform (Making sure everyone had enough land to support themselves and there family)<br>
<br>
[!] Thursday Test, Know your Vocab, Read the Textbook, Use the Study Guide<br>
`;
}
function showText() {
  document.getElementById("content").innerHTML = `
<h1>Chapter 12.1</h1>
In the nineteenth century, a new phase of Western expansion began. European nations began to view Asian and African societies as a source of industrial raw materials and a market for Western manufactured goods.
In the 1880s, European states began an intense scramble for overseas territory. Imperialism, the extension of a nation's power over other lands, was not new. Europeans had set up colonies and trading posts in North America, South America, and Africa by the sixteenth century.
However, the imperialism of the late nineteenth century, called the "new imperialism" by some historians, was different. Earlier, European states had been content, especially in the case of Africa and Asia, to set up a few trading posts where they could carry on trade and perhaps some missionary activity. Now they sought nothing less than direct control over vast territories.
Why did Westerners begin to increase their search for colonies after 1880? There was a strong economic motive. Capitalist states in the West were looking for both markets and raw materials such as rubber, oil, and tin for their industries. The issue was not simply an economic one, however. European nation-states were involved in heated rivalries. They acquired colonies abroad in order to gain an advantage over their rivals. Colonies were also a source of national prestige. To some people, in fact, a nation could not be great without colonies.
In addition, imperialism was tied to Social Darwinism and racism. Social Darwinists believed that in the struggle between nations, the fit are victorious. Racism is the belief that race determines traits and capabilities. Racists erroneously believe that particular races are superior or inferior.
Racist beliefs led to the use of military force against other nations. Some Europeans took a more religious and humanitarian approach to imperialism. They believed Europeans had a moral responsibility to civilize primitive people. They called this responsibility the "white man's burden." To some, this meant bringing the Christian message to the "heathen masses." To others, it meant bringing the benefits of Western democracy and capitalism to these societies.
The new imperialism was evident in Southeast Asia. In 1800 the Europeans ruled only two societies in this area: the Spanish Philippines and the Dutch East Indies. By 1900 virtually the entire area was under Western rule.

<h3>Great Britain</h3>
The process began with Great Britain. In 1819 Great Britain sent Sir Thomas Stamford Raffles to found a new colony on a small island at the tip of the Malay Peninsula. Called Singapore ("city of the lion"), in the new age of steamships, it soon became a major stopping point for traffic traveling to or from China.
During the next few decades, the British advance into Southeast Asia continued. Next to fall was the kingdom of Burma (modern Myanmar). Britain wanted control of Burma in order to protect its possessions in India. It also sought a land route through Burma into southern China. Although the difficult terrain along the frontier between Burma and China caused this effort to fail, British activities in Burma led to the collapse of the Burmese monarchy. Britain soon established control over the entire country.

<h3>France</h3>
France, which had some missionaries operating in Vietnam, nervously watched the British advance into Burma. The local Vietnamese authorities, who viewed Christianity as a threat to Confucian doctrine, persecuted the French missionaries. However, Vietnam failed to stop the Christian missionaries. Vietnamese internal rivalries divided the country into two separate governments—the north and the south.
France was especially alarmed by British attempts to monopolize trade. To stop any British movement into Vietnam, the French government decided in 1857 to force the Vietnamese to accept French protection.
The French eventually succeeded in making the Vietnamese ruler give up territories in the Mekong River delta. The French occupied the city of Saigon and, during the next 30 years, extended their control over the rest of the country. In 1883 France seized the city of Hanoi and later made the Vietnamese empire a French protectorate.
In the 1880s, France extended its control over neighboring Cambodia, Annam, Tonkin, and Laos. By 1887 France included all its new possessions in a new Union of French Indochina.

<h3>Thailand—The Exception</h3>
After the French conquest of Indochina, Thailand (then called Siam) was the only remaining free state in Southeast Asia. But the rivalry between the British and the French threatened to place Thailand under colonial rule, too.
Two remarkable rulers were able to prevent that from happening. One was King Mongkut (known to theatergoers as the king in The King and I), and the other was his son, King Chulalongkorn. Both promoted Western learning and maintained friendly relations with the major European powers. In 1896 Britain and France agreed to maintain Thailand as an independent buffer state between their possessions in Southeast Asia.

<h3>The United States</h3>
In 1898 during the Spanish-American War, U.S. naval forces under Commodore George Dewey defeated the Spanish fleet in Manila Bay in the Philippines. Believing it was his moral obligation to "civilize" other parts of the world, President William McKinley decided to turn the Philippines, which had been under Spanish control, into an American colony. This action would also prevent the area from falling into the hands of the Japanese. The islands gave the United States convenient access to trade with China.
Many Filipinos did not wish to be under American control. Emilio Aguinaldo (AH • gee • NAHL • doh) was the leader of a movement for independence in the Philippines. He began his revolt against the Spanish and went into exile in 1898. When the United States acquired the Philippines, Aguinaldo continued the revolt and set himself up as the president of the Republic of the Philippines. Led by Aguinaldo, the guerrilla forces fought bitterly against the U.S. troops to establish their independence.
The fight for Philippine independence resulted in three years of bloody warfare. However, the United States eventually defeated the guerrilla forces, and President McKinley had his stepping-stone to the rich markets of China.

<h3>Colonial Regimes</h3>
Western powers governed their new colonial empires by either indirect or direct rule. Their chief goals were to exploit the natural resources of the lands and to open up markets for their own manufactured goods.

<h3>Indirect and Direct Rule</h3>
Sometimes a colonial power could realize its goals by cooperating with local political elites. For example, the Dutch East India Company used indirect rule in the Dutch East Indies. Under indirect rule, local rulers were allowed to keep their authority and status in a new colonial setting. This made access to the region's natural resources easier. Indirect rule was cheaper because fewer officials had to be trained. It also affected local culture less.
However, indirect rule was not always possible. Some local elites resisted foreign conquest. In these cases, the local elites were replaced with Western officials. This system was called direct rule. Great Britain administered Burma directly through its colonial government in India. In Indochina, France used both systems. It imposed direct rule in southern Vietnam but ruled indirectly through the emperor in northern Vietnam
To justify their conquests, Western powers spoke of bringing the blessings of Western civilization to their colonial subjects, including representative government. However, many Westerners came to fear the idea of native peoples (especially educated ones) being allowed political rights.

<h3>Resistance to Colonial Rule</h3>
How did indigenous people in Southeast Asia respond to colonial rule?
Many subject peoples in Southeast Asia resented colonization. At first, resistance came from the existing ruling class. In Burma, for example, the monarch himself fought Western domination. By contrast, in Vietnam, after the emperor had agreed to French control of his country, a number of government officials set up an organization called Can Vuong ("Save the King"). They fought against the French without the emperor's help.
Sometimes resistance to Western control took the form of peasant revolts. Peasants were often driven off the land to make way for plantation agriculture. Angry peasants then vented their anger at the foreign invaders. For example, in Burma, in 1930 the Buddhist monk Saya San led a peasant uprising against the British colonial regime.
Early resistance movements failed. They were overcome by Western powers. In the early 1900s, however, a new kind of resistance emerged that was based on nationalism. The leaders were often from a new class that the colonial rule had created: Westernized intellectuals in the cities. They were the first generation of Asians to embrace the institutions and values of the West. Many were educated in the West, spoke Western languages, and worked in jobs connected with the colonial regimes.
At first, many of the leaders of these movements did not focus clearly on the idea of nationhood. Instead, they simply tried to defend the economic interests or religious beliefs of the native peoples. In Burma, for example, students at the University of Rangoon formed an organization to protest against official persecution of the Buddhist religion and British lack of respect for local religious traditions. They protested against British arrogance and failure to observe local customs in Buddhist temples. Not until the 1930s, however, did these resistance movements, such as those begun in Burma, begin to demand national independence.

<h1>Chapter 12.2</h1>

<h3>West Africa and North Africa</h3>
Why were European countries interested in West Africa and North Africa?
Before 1880, Europeans controlled little of the African continent directly. They were content to let African rulers and merchants represent European interests. Between 1880 and 1900, however, Great Britain, France, Germany, Belgium, Italy, Spain, and Portugal, spurred by intense rivalries among themselves, placed virtually all of Africa under European rule.

<h3>West Africa</h3>
Europeans had a keen interest in Africa's raw materials, especially those of West Africa—peanuts, timber, hides, and palm oil. Earlier in the nineteenth century, Europeans had profited from the slave trade in this region of Africa. By the late 1800s, however, trade in enslaved people had virtually ended. As the slave trade declined, Europe's interest in other forms of trade increased. The growing European presence in West Africa led to increasing tensions with African governments in the region.
For a long time, most African states were able to maintain their independence. However, in 1874 Great Britain annexed (incorporated a country within another country) the west coastal states as the first British colony of Gold Coast. At about the same time, Britain established a protectorate in Nigeria. By 1900, France had added the huge area of French West Africa to its colonial empire. This left France in control of the largest part of West Africa. In addition, Germany controlled Togo, Cameroon, German Southwest Africa, and German East Africa.

<h3>North Africa</h3>
Egypt had been part of the Ottoman Empire, but as Ottoman rule declined, the Egyptians sought their independence. In 1805 an officer of the Ottoman army named Muhammad Ali seized power and established a separate Egyptian state.
During the next 30 years, Muhammad Ali introduced a series of reforms to bring Egypt into the modern world. He modernized the army, set up a public school system, and helped create small industries that refined sugar, produced textiles and munitions, and built ships.
The growing economic importance of the Nile Valley in Egypt, along with the development of steamships, gave Europeans the desire to build a canal east of Cairo to connect the Mediterranean and Red Seas. Such a canal would allow transport between Europe and Asia, without traveling around Africa. In 1854 a French entrepreneur, Ferdinand de Lesseps, signed a contract to begin building the Suez Canal. The canal was completed in 1869.
The British took an active interest in Egypt after the Suez Canal was opened. Believing that the canal was its "lifeline to India," Great Britain tried to gain as much control as possible over the canal area.
In 1875 Britain bought Egypt's share in the Suez Canal. When an Egyptian army revolt against foreign influence broke out in 1881, Britain suppressed the revolt. Egypt became a British protectorate in 1914.
The British believed that they should also control Sudan, south of Egypt, to protect their interests in Egypt and the Suez Canal. In 1881 Muslim cleric Muhammad Ahmad, known as the Mahdi (in Arabic, "the rightly guided one"), launched a revolt that brought much of Sudan under his control.
Britain sent a military force under General Charles Gordon to restore Egyptian authority over Sudan. However, Muhammad Ahmad's troops wiped out Gordon's army at Khartoum in 1885. General Gordon himself died in the battle. Not until 1898 were British troops able to seize Sudan.
The French also had colonies in North Africa. In 1879 after about 150,000 French people had settled in the region of Algeria, the French government established control there. Two years later, France imposed a protectorate on neighboring Tunisia. In 1912 France established a protectorate over much of Morocco.
Italy joined the competition for colonies in North Africa by attempting to take over Ethiopia. In 1896, however, the Italian invading forces were defeated. Italy now was the only European state defeated by an African state. This humiliating loss led Italy to try again in 1911. Italy invaded and seized Turkish Tripoli, which it renamed Libya.

<h3>Central Africa</h3>
Central African territories were soon added to the list of European colonies. European explorers aroused popular interest in the dense tropical jungles of Central Africa.
David Livingstone was one such explorer. He arrived in Africa in 1841 as a 27-year-old medical missionary. During the 30 years he spent in Africa, Livingstone trekked through uncharted regions. He sometimes traveled by canoe, but mostly Livingstone walked and spent much of his time exploring the interior of the continent.
During his travels through Africa, Livingstone made detailed notes of his discoveries. He sent this information back to London whenever he could. The maps of Africa were often redrawn based on Livingstone's eyewitness accounts and reports. A major goal of Livingstone's explorations was to find a navigable river that would open Central Africa to European commerce and to Christianity.
When Livingstone disappeared for a while, an American newspaper, the New York Herald, hired a young journalist, Henry Stanley, to find the explorer. Stanley did find him, on the eastern shore of Lake Tanganyika. Overwhelmed by finding Livingstone alive if not well, Stanley greeted the explorer with these now-famous words, "Dr. Livingstone, I presume?"
After Livingstone's death in 1873, Stanley decided to carry on the great explorer's work. Unlike Livingstone, however, Henry Stanley had a strong dislike of Africa. He once said, "I detest the land most heartily."
In the 1870s, Stanley explored the Congo River in Central Africa and sailed down it to the Atlantic Ocean. Soon, he was encouraging the British to send settlers to the Congo River basin. When Britain refused, Stanley turned to King Leopold II of Belgium.
King Leopold II was the real driving force behind the colonization of Central Africa. He rushed enthusiastically into the pursuit of an empire in Africa. "To open to civilization," he said, "the only part of our globe where it has yet to penetrate, to pierce the darkness which envelops whole populations, it is, I dare to say, a crusade worthy of this century of progress." Profit, however, was equally important to Leopold. In 1877 he hired Henry Stanley to set up Belgian settlements in the Congo.
Leopold's claim to the vast territories of the Congo aroused widespread concern among other European states. France, in particular, rushed to plant its flag in the heart of Africa. Leopold ended up with the territories around the Congo River. France occupied the areas farther north.

<h3>East Africa</h3>
By 1885 Britain and Germany had become the chief rivals in East Africa. Germany came late to the ranks of the imperialist powers. At first, the German chancellor Otto von Bismarck had downplayed the importance of colonies. As more and more Germans called for a German empire, however, Bismarck became a convert to colonialism. As he expressed it, "All this colonial business is a sham, but we need it for the elections."
In addition to its West African holdings, Germany tried to develop colonies in East Africa. Most of East Africa had not yet been claimed by any other power. However, the British were also interested in the area because control of East Africa would connect the British Empire in Africa from South Africa to Egypt. Portugal and Belgium also claimed parts of East Africa.
To settle conflicting claims, European countries met at the Berlin Conference in 1884 and 1885. The conference officially recognized both British and German claims for territory in East Africa. Portugal received a clear claim on Mozambique. No African delegates, however, were present at this conference.

<h3>South Africa</h3>
How was European dominance different in South Africa?
Nowhere in Africa did the European presence grow more rapidly than in the south. By 1865 the total white population of South Africa had risen to nearly 200,000 people. The Boers, or Afrikaners—as the descendants of the original Dutch settlers were called—had occupied Cape Town and surrounding areas in South Africa since the seventeenth century. During the Napoleonic Wars, however, the British seized these lands from the Dutch. Afterward, the British encouraged settlers to come to what they called Cape Colony.

<h3>The Boer Republics</h3>
In the 1830s, disgusted with British rule, the Boers moved from the coastal lands and headed northward on the Great Trek. Altogether one out of every five Dutch-speaking South Africans joined the trek. Their parties eventually settled in the region between the Orange and Vaal (VAHL) Rivers and in the region north of the Vaal River. In these areas, the Boers formed two independent republics—the Orange Free State and the Transvaal (later called the South African Republic).
The Boers believed that white superiority was ordained by God. They denied non-Europeans any place in their society, other than as laborers or servants. As they settled the lands, the Boers put many of the indigenous peoples, those native to a region, in these areas on reservations.
The Boers had frequently battled the indigenous Zulu people. In the early nineteenth century, the Zulu, under a talented ruler named Shaka, had carved out their own empire. Even after Shaka's death, the Zulu remained powerful. In the late 1800s, the Zulu were defeated when the British military joined the conflict.

<h3>Cecil Rhodes</h3>
In the 1880s, British policy in South Africa was influenced by Cecil Rhodes. Rhodes had founded diamond and gold mining companies that had made him a fortune. Rhodes was a great champion of British expansion. He said once, "I think what [God] would like me to do is to paint as much of Africa British red as possible." One of Rhodes's goals was to create a series of British colonies "from the Cape to Cairo"—all linked by a railroad.
When gold and diamonds were discovered in the Transvaal, British settlers swarmed in looking to make their fortunes. The Boer residents resented the settlers and they were sometimes mistreated.
Rhodes then secretly backed a raid that was meant to spark an uprising among British settlers against the Transvaal government. The raid failed, and the British government forced Rhodes to resign as head of the Cape Colony. This action was too late, however, to prevent a war between the British and the Boers.

<h3>The Boer War</h3>
This war, called the Boer War, dragged on from 1899 to 1902. Fierce guerrilla resistance by the Boers angered the British. They responded by burning crops and forcing about 120,000 Boer women and children into detention camps, where lack of food caused some 20,000 deaths. Eventually, the vastly larger British army won. A peace treaty was signed in 1902.
In 1910 the British created an independent Union of South Africa, which combined the old Cape Colony and the Boer republics. The new state would be a self-governing nation within the British Empire. To appease the Boers, the British agreed that only whites, with a few propertied Africans, would vote.

<h3>Effects on Imperialism</h3>
By 1914 Great Britain, France, Germany, Belgium, Italy, Spain, and Portugal had divided up Africa. Only Liberia, which had been created as a homeland for the formerly enslaved persons of the United States, and Ethiopia remained free states. Native peoples who dared to resist were devastated by the Europeans' superior military force.

<h3>Colonial Rule in Africa</h3>
As was true in Southeast Asia, most European governments ruled their new territories in Africa with the least effort and expense possible. Indirect rule meant relying on existing political elites and institutions. The British especially followed this approach. At first, in some areas, the British simply asked a local ruler to accept British authority and to fly the British flag over official buildings.
The concept of indirect rule was introduced in the Islamic state of Sokoto, in northern Nigeria, beginning in 1903. This system of indirect rule in Sokoto had one good feature: It did not disrupt local customs and institutions. However, it did have some unfortunate consequences.
The system of indirect rule was basically a fraud because British administrators made all major decisions. The native authorities served chiefly to enforce those decisions.
Another problem was that the policy of indirect rule kept the old African elite in power. Such a policy provided few opportunities for ambitious and talented young Africans from outside the old elite. In this way British indirect rule sowed the seeds for class and ethnic tensions, which erupted after independence came in the twentieth century.
Most other European nations governed their African possessions through a form of direct rule. This was true in the French colonies. At the top was a French official, usually known as a governor-general. He was appointed from Paris and governed with the aid of a bureaucracy in the capital city of the colony.
The French ideal was to assimilate African subjects into French culture rather than preserve native traditions. Africans were eligible to run for office and even serve in the French National Assembly in Paris. A few were also appointed to high-powered positions in the colonial administration.

<h3>Rise of African Nationalism</h3>
A new class of leaders emerged in Africa by the beginning of the twentieth century. Educated in colonial schools or in Western nations, they were the first generation of Africans to know a great deal about the West.
The members of this new class admired Western culture and sometimes disliked the ways of their own countries. They were eager to introduce Western ideas and institutions into their own societies. Still, many of these new leaders came to resent the foreigners and their arrogant contempt for African peoples. These intellectuals recognized the gap between theory and practice in colonial policy. Westerners had exalted democracy, equality, and political freedom but did not apply these values in the colonies.
There were few democratic institutions. Native peoples could have only low-paying jobs in the colonial bureaucracy. To many Africans, colonialism had meant losing their farmlands or working on plantations or in factories run by foreigners. Some African leaders lost even more, such as the rights to mine the natural resources in their country.
Middle-class Africans did not suffer as much as poor African peasants. However, members of the middle class also had complaints. They usually qualified only for menial jobs in the government or business. Even then, their salaries were lower than those of Europeans in similar jobs.
Europeans expressed their assumed superiority over Africans in other ways. Segregated clubs, schools, and churches were set up as more European officials brought their wives and began to raise families. Europeans were also condescending in their relationships with Africans. For instance, Europeans had a habit of addressing Africans by their first names.
Such conditions led many members of the new urban educated class to feel great confusion toward their colonial rulers and the civilization the colonists represented. The educated Africans found many aspects of Western culture to be superior to their own. However, these intellectuals fiercely hated colonial rule and were determined to assert their own nationality and cultural destiny. Out of this mixture of hopes and resentments emerged the first stirrings of modern nationalism in Africa.
During the first quarter of the twentieth century, resentment turned to action. Across Africa, native peoples began to organize political parties and movements seeking the end of foreign rule. They wanted to be independent and self-governing.

<h1>Chapter 12.3</h1>

<h3>The Great Rebellion</h3>
Over the course of the eighteenth century, British power in India had increased while the power of the Mogul rulers had declined. The British government gave a trading company, the British East India Company, power to become actively involved in India's political and military affairs. To rule India, the British East India Company had its own soldiers and forts. It also hired Indian soldiers, known as sepoys, to protect the company's interests in the region.

<h3>Events Leading to Rebellion</h3>
In 1857 a growing Indian distrust of the British led to a revolt. The British call the revolt the Sepoy Mutiny. Indians call it the First War of Independence. Neutral observers label it the Great Rebellion.
The major immediate cause of the revolt was a rumor that the troops' new rifle cartridges were greased with cow and pig fat. The cow was sacred to Hindus. The pig was taboo to Muslims. To load a rifle at that time, soldiers had to bite off the end of the cartridge. To the sepoys, touching these greased cartridges to their lips would mean that they were polluted.
A group of sepoys at an army post in Meerut, near Delhi, refused to load their rifles with the cartridges. The British charged them with mutiny, publicly humiliated them, and put them in prison. This treatment of their comrades enraged the sepoy troops in Meerut. They went on a rampage, killing 50 European men, women, and children. Soon other Indians joined the revolt, including princes whose land the British had taken.
Within a year, however, Indian troops loyal to the British and fresh British troops had crushed the rebellion. Although Indian troops fought bravely and outnumbered the British by about 230,000 to 45,000, they were not well organized. Rivalries between Hindus and Muslims kept the Indians from working together.
Atrocities were terrible on both sides. At Kanpur (Cawnpore), Indians massacred 200 defenseless women and children in a building known as the House of the Ladies. Recapturing Kanpur, the British took their revenge before executing the Indians.

<h3>Effects of the Rebellion</h3>
As a result of the uprising, the British Parliament transferred the powers of the East India Company directly to the British government. In 1876 Britian's Queen Victoria took the title Empress of India. The people of India were now her colonial subjects, and India then became her "Jewel in the Crown."
Although the rebellion failed, it helped fuel Indian nationalism. The rebellion marked the first significant attempt by the people of South Asia to throw off British Raj (rule). Later, a new generation of Indian leaders would take up the cause.

<h3>British Colonial Rule</h3>
What were the consequences of British rule in India?
After the Sepoy Mutiny, the British government began to rule India directly. They appointed a British official known as a viceroy (a governor who ruled as a representative of a monarch). A British civil service staff assisted the viceroy. This staff of about 3,500 officials ruled almost 300 million people, the largest colonial population in the world. British rule involved both benefits and costs for Indians.
British rule in India had several benefits for colonial subjects. It brought order and stability to a society badly divided into many states with different, and sometimes opposing, political systems. It also led to a fairly honest, efficient government.
Through the efforts of the British administrator and historian Lord Thomas Macaulay, a new school system was set up. The new system used the English language, as Macaulay explained:
The goal of the new school system was to train Indian children to serve in the government and army. The new system served only elite, upper-class Indians, however. Ninety percent of the population remained uneducated and illiterate.
The British hired Indians and built roads, canals, universities, and medical centers. A postal service was introduced shortly after it appeared in Great Britain. India's first rail network, beginning in Bombay, opened in 1853. By 1900, 25,000 miles (40,225 km) of railroads crisscrossed India. Health and sanitation conditions were also improved.
But the Indian people paid a high price for the peace and stability brought by British rule. Perhaps the greatest cost was economic. British entrepreneurs and a small number of Indians reaped financial benefits from British rule, but it brought hardship to millions of others in both the cities and the countryside. British manufactured goods destroyed local industries. British textiles put thousands of women out of work and severely damaged the Indian textile industry.
In rural areas, the British sent the zamindars to collect taxes. The British believed that using these local officials would make it easier to collect taxes from the peasants. However, the zamindars in India took advantage of their new authority. They increased taxes and forced the less fortunate peasants to become tenants or lose their land entirely. Peasant unrest grew.
The British also encouraged many Indian farmers to switch from growing food to growing cotton. As a consequence, food supplies could not keep up with the growing population. Between 1800 and 1900, 30 million Indians died of starvation.
Finally, British rule was degrading, even for the newly educated upper classes who benefited the most from it. The best jobs and the best housing were reserved for Britons. Although many British colonial officials sincerely tried to improve the lot of the people in India, British arrogance and racial attitudes cut deeply into the pride of many Indians and led to the rise of an Indian nationalist movement.

<h3>Indian Nationalists</h3>
The first Indian nationalists were upper-class and English-educated. Many of them were from urban areas, such as Bombay (Mumbai), Madras (Chennai), and Calcutta (Kolkata). Some were trained in British law and were members of the civil service.
At first, many Indian nationalists preferred reform to revolution. However, the slow pace of reform convinced many that relying on British goodwill was futile. In 1885 a small group of Indians met in Bombay to form the Indian National Congress (INC). The INC did not demand immediate independence. Instead, the group called for a share in the governing process.
The INC had difficulties because of religious differences. The INC sought independence for all Indians, regardless of class or religious background. However, many of its leaders were Hindu and reflected Hindu concerns. Later, Muslims called for the creation of a separate Muslim League. Such a league would represent the interests of the millions of Muslims in Indian society.
In 1914 the return of a young Hindu from South Africa brought new life to India's struggle for independence. Mohandas Gandhi was born in 1869 in Gujarat, in western India. He studied in London and became a lawyer. In 1893 Gandhi went to South Africa to work in a law firm serving Indian workers there. He soon learned of the racial exploitation of Indians living in South Africa.
On his return to India, Gandhi became active in the independence movement. Using his experience in South Africa, he began a movement based on nonviolent resistance. Its aim was to force the British to improve the lot of the poor and to grant independence to India. Ultimately, Gandhi's movement led to Indian independence.

<h3>Colonial Indian Culture</h3>
From the beginning of their rule, the British often showed disrespect for India's cultural heritage. The Taj Mahal, for example, was built as a tomb for the beloved wife of an Indian ruler. The British used it as a favorite site for weddings and parties. Many partygoers even brought hammers to chip off pieces as souvenirs.
The love-hate tension in India that arose from British domination led to a cultural awakening as well. The cultural revival began in the early nineteenth century with the creation of a British college in Calcutta. A local publishing house was opened. It issued textbooks on a variety of subjects, including the sciences, Sanskrit, and Western literature. The publisher also printed grammars and dictionaries in various Indian languages.
This revival soon spread to other regions of India. It led to a search for a new national identity and a modern literary expression. Indian novelists and poets began writing historical romances and epics. Some wrote in English, but most were uncomfortable with a borrowed colonial language. They preferred to use their own regional tongues.
Printed in the various regional Indian languages, newspapers were a common medium used to arouse mass support for nationalist causes. These newspapers reached the lower-middle-class populations—tens of thousands of Indians who had never learned a word of English. In his newspaper Kesari ("The Lion"), journalist Balwantrao Gangadhar Tilak used innuendo (suggestion) to convey the negative feelings about the British without ever writing anything disloyal.
The most famous Indian author was Rabindranath Tagore, winner of the Nobel Prize in Literature in 1913. A great writer and poet, Tagore had many talents. He was also a social reformer, spiritual leader, educator, philosopher, singer, painter, and international spokesperson for the moral concerns of his age. Tagore liked to invite the great thinkers of the time to his expansive country home, or estate. There he set up a school that became an international university.
Tagore's life mission was to promote pride in a national Indian consciousness in the face of British domination. He wrote a widely read novel in which he portrayed the love-hate relationship of India toward its colonial mentor. The novel reflected an Indian people who admired and imitated the British but who agonized over how to establish their own national identity.
Rabindranath Tagore, however, was more than an Indian nationalist. His life's work was one long prayer for human dignity, world peace, and the mutual understanding and union of East and West. As Tagore once said,
    It is my conviction that my countrymen will truly gain their India by fighting against the education that teaches them that a country is greater than the ideals of humanity.

<h1>Chapter 12.4</h1>
In the late 1800s, the United States began to intervene in the affairs of its southern neighbors. In 1895 exile José Martí returned to Cuba to lead a revolt against Spanish rule. The brutality with which the Spanish crushed the rebellion shocked Americans and began a series of events that led the United States to declare war against Spain in 1898. As a result of the Spanish-American War, Cuba effectively became a protectorate of the United States. By the treaty that ended the war, Puerto Rico was also annexed to the United States.
In 1903 President Theodore Roosevelt supported a rebellion that allowed Panama to separate from Colombia and establish a new nation. In return, the United States was granted control of a 10-mile strip of land through the country. There the United States built the Panama Canal, which opened in 1914 and was one of the world's greatest engineering feats of its time. The canal connects the Atlantic and Pacific Oceans. On average, it takes a ship 8 to 10 hours to move through the canal passage.
In 1904 President Roosevelt expanded American involvement in Latin America. At the time, European powers threatened to send warships to Santo Domingo in the Dominican Republic to collect debts owed to them. In a statement that became known as the Roosevelt Corollary to the Monroe Doctrine, Roosevelt claimed that the United States could intervene in any Latin American nation guilty of "chronic misconduct" (such as the inability to repay debts). The United States then took control of debt collection in the Dominican Republic.
American investments in Latin America soon expanded. In the early 1900s, the United States began to pursue "dollar diplomacy," extending its influence by investing in Latin American development. The United States soon replaced Europe as the source of loans and investments. Direct U.S. investments reached $3.5 billion, out of a world total of $7.5 billion.
As American investments grew, so too did the resolve to protect those investments. U.S. military forces were sent to Cuba, Mexico, Guatemala, Honduras, Nicaragua, Panama, Colombia, Haiti, and the Dominican Republic to protect American interests. Some expeditions stayed for years. U.S. Marines were in Haiti from 1915 to 1934 and in Nicaragua from 1912 to 1933. Increasing numbers of Latin Americans began to resent this interference from the "big bully" to the north.

<h3>Revolution in Mexico</h3>
After 1870, large landowners in Latin American began to take a more direct interest in national politics and even in governing. In Argentina and Chile, for example, landholding elites controlled the governments. They adopted constitutions similar to those of the United States and European democracies. The ruling elites, however, limited voting rights.
In some countries, large landowners supported dictators who looked out for the interests of the ruling elite. Porfirio Díaz, who ruled Mexico between 1877 and 1911, created a conservative, centralized government. The army, foreign capitalists, large landowners, and the Catholic Church supported Díaz. All these groups benefited from their alliance with Díaz. However, growing forces for change in Mexico led to a revolution.
During Díaz‘s dictatorial reign, the wages of workers had declined. Ninety-five percent of the rural population owned no land, whereas about 1,000 families owned almost all of Mexico. A liberal landowner, Francisco Madero, forced Díaz from power in 1911. The door to a wider revolution then opened.
Madero made a valiant effort to handle the revolutionary forces. He put some of the best officials in his administration, and he sought a balance in dealing with foreign interests. However, his efforts proved ineffective.
The northern states were in near anarchy as Pancho Villa's armed masses of bandits swept the countryside. The federal army was full of hard-minded generals who itched to assert their power. Even the liberal politicians and idealists found fault with Madero for not solving all of the country's problems at once.
Francisco Madero's ineffectiveness created a demand for agrarian reform. This new call for reform was led by Emiliano Zapata. Zapata aroused the masses of landless peasants and began to seize and redistribute the estates of wealthy landholders. Although Madero tried to reach an agreement with him for land reforms, Zapata refused to disarm his followers.
Between 1910 and 1920, the Mexican Revolution caused great damage to the Mexican economy. Finally, a new constitution was enacted in 1917. This constitution set down many goals of the revolution. For revolutionary leaders, the goal was political reform. For peasants, it was about land reform. The constitution set up a government led by a president and elected by universal male suffrage. It also created land-reform policies, established limits on foreign investors, and set an agenda to help the workers. This agenda included the rights of workers to form unions, set a minimum wage, and limited working hours. Eventually, the revolution helped bring about a more democratic and politically stable Mexico.
The revolution also led to an outpouring of patriotism throughout Mexico. National pride was evident as intellectuals and artists sought to capture what was unique about Mexico with special emphasis on its past.

<h3>Prosperity and Social Change</h3>
After 1870, Latin America began an age of prosperity based to a large extent on the export of a few basic items. These included wheat and beef from Argentina, coffee from Brazil, coffee and bananas from Central America, and sugar and silver from Peru. These foodstuffs and raw materials were largely exchanged for finished goods—textiles, machines, and luxury items—from Europe and the United States.
After 1900, Latin Americans also increased their own industrialization. They built factories to produce textiles, foods, and construction materials. But because the growth of the Latin American economy came mostly from the export of raw materials, Latin America remained economically dependent on Western nations and their foreign investment.
Despite its economic growth, Latin America was still an underdeveloped region of the world. Old patterns still largely prevailed in Latin American societies. Rural elites dominated their estates and their workers. Slavery had been abolished by 1888, but former enslaved people and their descendants were at the bottom of society. The indigenous peoples were still poverty stricken.
One result of the prosperity of increased exports was growth in the middle sectors of Latin American society. Lawyers, merchants, shopkeepers, businesspeople, school teachers, professors, bureaucrats, and military officers increased in numbers.
Regardless of the country in which they lived, middle-class Latin Americans shared some common characteristics. They lived in cities and sought education and decent incomes. They also saw the United States as a model, especially in regard to industrialization. The middle class sought liberal reform, not revolution. After they had the right to vote, they generally sided with the landholding elites.
As Latin American export economies boomed, the working class grew. So too did the labor unions, especially after 1914. Radical unions often advocated the use of the general strike as an instrument for change. By and large, the governing elites were able to stifle the political influence of the working class by limiting their right to vote.
The need for industrial workers also led Latin American countries to seek immigrants from Europe. For example, between 1880 and 1914, 3 million Europeans, primarily Italians and Spaniards, settled in Argentina.
As in Europe and the United States, in Latin America industrialization led to urbanization. Buenos Aires (called "the Paris of South America") had 750,000 inhabitants by 1900 and 2 million by 1914. By that time, 53 percent of Argentina's population lived in cities.

<h1>The Decline of the Qing Dynasty</h1>

<h3>Causes of Decline</h3>
In 1800, after a long period of peace and prosperity, the Qing dynasty of the Manchus was at the height of its power. A little more than a century later, however, humiliated and harassed by the Western powers, the Qing dynasty collapsed.
One important reason for the abrupt decline and fall of the Qing dynasty was the intense external pressure that the modern West applied to Chinese society. However, internal problems also played a role.
After an extended period of growth, the Qing dynasty began to suffer from corruption, peasant unrest, and incompetence. These weaknesses were made worse by rapid growth in the country's population. By 1900, there were 400 million people in China. Population growth created a serious food shortage. In the 1850s, one observer wrote, "Not a year passes in which a terrific number of persons do not perish of famine in some part or other of China."
The ships, guns, and ideas of foreigners highlighted the growing weakness of the Qing dynasty and probably hastened its end. By 1800, Europeans had been in contact with China for more than 200 years. Wanting to limit contact with outsiders, the Qing dynasty had restricted European merchants to a small trading outlet at Guangzhou (GWAHNG • JOH), or Canton. The merchants could deal with only a few Chinese firms. The British did not like this arrangement.
Britain had a trade deficit, or an unfavorable trade balance, with China. That is, it imported more goods from China than it exported to China. Britain had to pay China with silver for the difference between its imports—tea, silk, and porcelain—from China and its exports—Indian cotton—to China. At first, the British tried to negotiate with the Chinese to improve the trade imbalance. When negotiations failed, the British turned to trading opium.

<h3>The Opium War</h3>
Opium was grown in northern India under the sponsorship of the British East India Company and then shipped directly to Chinese markets. Demand for opium—a highly addictive drug—in South China jumped dramatically. Soon, silver was flowing out of China and into the pockets of the officials of the British East India Company.
The Chinese reacted strongly. They appealed to the British government on moral grounds to stop the traffic in opium. Lin Zexu, a Chinese government official, wrote to Queen Victoria:
Suppose there were people from another country who carried opium for sale to England and seduced your people into buying and smoking it; certainly your honorable ruler would deeply hate it and be bitterly aroused.
—quoted in The British Imperial Century, 1815–1914
The British refused to halt their activity, however. As a result, the Chinese blockaded the foreign area in Guangzhou to force traders to surrender their opium. The British responded with force, starting the Opium War (1839–1842).
The Chinese were no match for the British. British warships destroyed Chinese coastal and river forts. When a British fleet sailed almost unopposed up the Chang Jiang (Yangtze River) to Nanjing, the Qing dynasty made peace.
In the Treaty of Nanjing in 1842, the Chinese agreed to open five coastal ports to British trade, limit taxes on imported British goods, and pay for the costs of the war. China also agreed to give the British ownership of the island of Hong Kong. Nothing was said in the treaty about the opium trade.
Moreover, in the five ports, Europeans lived in their own sections and were subject not to Chinese laws but to their own laws—a practice known as extraterritoriality.
The Opium War marked the beginning of the establishment of Western influence in China. For the time being, the Chinese dealt with the problem by pitting foreign countries against one another. Concessions granted to the British were offered to other Western nations, including the United States. Soon, thriving foreign areas were operating in the five treaty ports along the southern Chinese coast.

<h3>The Tai Ping Rebellion</h3>
In the meantime, the failure of the Chinese government to deal with pressing internal economic problems led to a peasant revolt, known as the Tai Ping (TIE PING) Rebellion (1850–1864). It was led by Hong Xiuquan, a Christian convert who viewed himself as a younger brother of Jesus.
Hong was convinced that God had given him the mission of destroying the Qing dynasty. Joined by great crowds of peasants, Hong captured the town of Yongan and proclaimed a new dynasty, the Heavenly Kingdom of Great Peace (Tai Ping Tianguo in Chinese—hence the name of the rebellion.)
In March 1853, the rebels seized Nanjing, the second largest city of the empire, and massacred 25,000 men, women, and children. The revolt continued for 10 more years but gradually began to fall apart. Europeans came to the aid of the Qing dynasty when they realized the destructive nature of the Tai Ping forces. One British observer noted there was "no hope of any good ever coming of the rebel movement. They do nothing but burn, murder, and destroy.”
In 1864, Chinese forces, with European aid, recaptured Nanjing and destroyed the remaining rebel force. The Tai Ping Rebellion was one of the most devastating civil wars in history. As many as 20 million people died during the 14-year struggle.
China's ongoing struggle with the West prevented the Qing dynasty from dealing effectively with the internal unrest. Beginning in 1856, the British and the French applied force to gain greater trade privileges. As a result of the Treaty of Tianjin in 1858, the Chinese agreed to legalize the opium trade and to open new ports to foreign trade. They also surrendered the Kowloon Peninsula to Great Britain.

<h3>Efforts at Reform</h3>
By the late 1870s, the Qing dynasty was in decline. Unable to restore order themselves, government troops had relied on forces recruited by regional warlords to help fight the Tai Ping Rebellion. To finance their armies, the warlords had collected taxes from local people. After the revolt, many of these warlords kept their armies.
In its weakened state, the Qing court finally began to listen to the appeals of reform-minded officials. The reformers called for a new policy they called "self-strengthening." That is, China should adopt Western technology but keep its Confucian values and institutions.
Some reformers wanted to change China's traditional political institutions by introducing democracy. However, such ideas were too radical for most reformers. During the last quarter of the nineteenth century, the Chinese government tried to modernize China's military forces and build up industry without touching the basic elements of Chinese civilization. Railroads, weapons factories, and shipyards were built. However, the Chinese value system remained unchanged.

<h3>The Advance of Imperialism</h3>
In the end, however, the changes did not help the Qing stay in power. The European advance into China continued during the last two decades of the nineteenth century. Internal conditions also continued to deteriorate.

<h3>Mounting Pressures</h3>
In the north and northeast, Russia took advantage of the Qing dynasty's weakness to force China to give up territories north of the Amur River in Siberia. In Tibet, a struggle between Russia and Great Britain kept both powers from seizing the territory outright. This allowed Tibet to become free from Chinese influence.
Even more ominous changes were taking place in the Chinese heartland. European states began to create spheres of influence, areas in which the imperial powers had exclusive trading rights. After the Tai Ping Rebellion, warlords in the provinces began to negotiate directly with foreign nations. In return for money, the warlords granted these nations exclusive trading rights or railroad-building and mining privileges. In this way, Britain, France, Germany, Russia, and Japan all established spheres of influence in China.
In 1894, another blow furthered the disintegration of the Qing dynasty. The Chinese went to war with Japan over Japanese inroads into Korea, a land that the Chinese had controlled for a long time. The Chinese were soundly defeated. Japan demanded and received the island of Taiwan and the Liaodong (LYOW • DOONG) Peninsula. Fearing Japan's growing power, however, the European powers forced Japan to give the Liaodong Peninsula back to China.
New pressures for Chinese territory soon arose. In 1897, Chinese rioters murdered two German missionaries. Germany used this as a pretext to demand territories in the Shandong (SHON • DOONG) Peninsula. When the Chinese government approved the demand, other European nations made new claims on Chinese territory.

<h3>Internal Crisis</h3>
This latest scramble for territory took place at a time of internal crisis in China. In June 1898, the young emperor Guang Xu (GWANG SHYOO) launched a massive reform program based on changes in Japan. During the following weeks, known as the One Hundred Days of Reform, the emperor issued edicts calling for major political, administrative, and education reforms. With these reforms, Guang Xu intended to modernize government bureaucracy by following Western models; to adopt a new education system that would replace the traditional civil service examinations; and to adopt Western-style schools, banks, and a free press. Guang Xu also intended to train the military to use modern weapons and Western fighting techniques.
Many conservatives at court, however, opposed these reforms. They saw little advantage in copying the West. As one said, "An examination of the causes of success and failure in government reveals that . . . the adoption of foreignism leads to disorder." According to this conservative, traditional Chinese rules needed to be reformed and not rejected in favor of Western changes.
Most important, Empress Dowager Ci Xi (TSUH • SEE), the emperor's aunt, opposed the new reform program. Ci Xi became a dominant force at court and opposed the emperor's reforms. With the aid of the imperial army, she eventually imprisoned the emperor. Other supporters of the reforms were imprisoned, exiled, or prosecuted. These actions ended Guang Xu's reforms. Although Guang Xu's efforts aroused popular sympathy, they had limited support within Chinese society overall.

<h3>Responses to Imperialism</h3>
As foreign pressure on the Qing dynasty grew stronger, both Great Britain and the United States feared that other nations would overrun the country should the Chinese government collapse.

<h3>Opening the Door to China</h3>
In 1899, U.S. secretary of state John Hay wrote a note to Britain, Russia, Germany, France, Italy, and Japan. Hay presented a proposal that ensured equal access to the Chinese market for all nations and preserved the unity of the Chinese empire. When none of the other imperialist governments expressed opposition to the idea, Hay proclaimed that all major states with economic interests in China had agreed that the country should have an Open Door policy.
In part, the Open Door policy reflected American concern for the survival of China. However, it also reflected the interests of some U.S. trading companies. These companies wanted to operate in open markets and disliked the existing division of China into separate spheres of influence dominated by individual countries.
The Open Door policy did not end the system of spheres of influence. However, it did reduce restrictions on foreign imports imposed by the dominating power within each sphere. The Open Door policy also helped reduce imperialist hysteria over access to the China market. The policy lessened fears in Britain, France, Germany, and Russia that other powers would take advantage of China's weakness and attempt to dominate the China market for themselves.

<h3>The Boxer Rebellion</h3>
The Open Door policy came too late to stop the Boxer Rebellion. Boxer was the popular name given to members of a secret organization called the Society of Harmonious Fists. Members practiced a system of exercise—a form of shadowboxing, or boxing with an imaginary opponent—that they thought would protect them from bullets.
The Boxers were upset by economic distress and the foreign takeover of Chinese lands. They wanted to push foreigners out of China. Their slogan was "destroy the foreigner." They especially disliked Christian missionaries and Chinese converts to Christianity who seemed to threaten Chinese traditions. At the beginning of 1900, Boxer bands roamed the countryside and slaughtered foreign missionaries and Chinese Christians. Foreign business people and the German envoy to Beijing were also victims.
Response to the killings was immediate and overwhelming. An allied army consisting of 20,000 British, French, German, Russian, American, and Japanese troops attacked Beijing in August 1900. The army restored order and demanded more concessions from the Chinese government. The Chinese government was forced to pay a heavy indemnity to the powers that had crushed the uprising. The imperial government was now weaker than ever.

<h1>Chapter 13.2</h1>

<h3>The Fall of the Qing</h3>
After the Boxer Rebellion, the Qing dynasty in China tried desperately to reform itself. Ci Xi, who had long resisted suggestions from her advisers for change, now embraced a number of reforms.
A new education system based on the Western model was adopted, and the civil service examination system was dropped. In 1909 legislative assemblies were formed at the provincial, or local, level. Elections for a national assembly were held in 1910.
The emerging new elite, composed of merchants, professionals, and reform-minded gentry, soon became impatient with the slow pace of political change. They were angry when they discovered that the new assemblies were not allowed to pass laws but could only give advice to the ruler. Moreover, the recent reforms had done nothing for the peasants, artisans, and miners, whose living conditions were getting worse as taxes increased. Unrest grew in the countryside as the dynasty continued to ignore deep-seated resentments.

<h3>The Rise of Sun Yat-sen</h3>
The first signs of revolution appeared during the 1890s when the young radical Sun Yat-sen formed the Revive China Society.
Sun Yat-sen believed that the Qing dynasty was in a state of decay and could no longer govern the country. Unless the Chinese were united under a strong government, they would remain at the mercy of other countries. Although Sun believed that China should follow the pattern of Western countries, he also knew that the Chinese people were hardly ready for democracy.
Sun instead developed a three-stage reform process. The first stage would be a military takeover. In the second stage, a transitional phase, Sun's own revolutionary party would prepare the people for democratic rule. The final stage called for establishment of a constitutional democracy.
At a convention in Tokyo in 1905, Sun united members of radical groups from across China and formed the Revolutionary Alliance, which eventually became the Nationalist Party. In presenting his program, Sun Yat-sen called for the following changes:
Establish the Republic: Now our revolution is based on equality, in order to establish a republican government. All our people are equal and all enjoy political rights…. Equalize land ownership: The good fortune of civilization is to be shared equally by all the people of the nation…. Its [the land's] present price shall be received by the owner … after the revolution [it] shall belong to the state.
—quoted in Sources of Chinese Tradition, 1960
Sun's new organization advocated his Three People's Principles, which promoted nationalism, democracy, and the right for people to pursue their own livelihoods. Although the new organization was small, it benefited from the rising discontent generated by the Qing dynasty's failure to improve conditions in China.

<h3>The Revolution of 1911</h3>
The Qing dynasty was near its end. In 1908, Empress Dowager Ci Xi died. Her nephew Guang Xu, a prisoner in the palace, died one day before his aunt. The throne was now occupied by China's “last emperor," the infant Henry Pu Yi.
In October 1911, followers of Sun Yat-sen launched an uprising in central China. At the time, Sun was traveling in the United States. Thus, the revolt had no leader, but the government was too weak to react. The Qing dynasty collapsed, opening the way for new political forces.
Sun's party had neither the military nor the political strength to form a new government. The party was forced to turn to a member of the old order, General Yuan Shigai (YOO • AHN SHUR • GIE), who controlled the army.
Yuan was a prominent figure in military circles. He had been placed in charge of the imperial army sent to suppress the rebellion. However, he abandoned the government and negotiated with members of Sun Yat-sen's party. General Yuan agreed to serve as president of a new Chinese republic and to allow the election of a legislature. Sun arrived in China in January 1912, after reading about the revolution in a Denver, Colorado newspaper.
In the eyes of Sun Yat-sen's party, the events of 1911 were a glorious revolution that ended 2,000 years of imperial rule. However, the 1911 uprising was hardly a revolution. It produced no new political or social order. Sun Yat-sen and his followers still had much to accomplish.
The Revolutionary Alliance was supported mainly by an emerging urban middle class, and its program was based largely on Western liberal democratic principles. However, the urban middle class in China was too small to support a new political order. Most of the Chinese people still lived on the land, and few peasants supported Sun Yat-sen's party. In effect, then, the events of 1911 were less a revolution than a collapse of the old order.

<h3>An Era of Civil War</h3>
After the collapse of the Qing dynasty, the military took over. Sun Yat-sen and his colleagues had accepted General Yuan Shigai as president of the new Chinese republic in 1911 because they lacked the military force to compete with his control over the army. Many feared that if the revolt lapsed into chaos, the Western powers would intervene. If that happened, the last shreds of Chinese independence would be lost. However, even the general's new allies distrusted his motives.
Yuan understood little of the new ideas sweeping into China from the West. He ruled in a traditional manner and even tried to set up a new imperial dynasty. The reformers hated Yuan for using murder and terror to destroy the new democratic institutions. The traditionalists hated Yuan for being disloyal to the dynasty he had served.
Yuan's dictatorial efforts rapidly led to clashes with Sun's party, now renamed the Guomindang, or Nationalist Party. When Yuan dissolved the new parliament, the Nationalists launched a rebellion. The rebellion failed, and Sun Yat-sen fled to Japan.
Yuan was strong enough to brush off the challenge from the revolutionary forces, but he could not turn back history. He died in 1916 and was succeeded by one of his officers. Over the next several years, China slipped into civil war as the power of the central government disintegrated and military warlords seized power in the provinces. Their soldiers caused massive destruction throughout China.

<h3>Cultural Changes</h3>
Western influences forced the Chinese to adapt to new ways of thinking and living. Early twentieth-century Chinese culture reflected the struggle between Confucian social ideas and those of the West.

<h3>Society in Transition</h3>
When European traders began to move into China in greater numbers in the mid-1800s, Chinese society was in a state of transition. The growth of industry and trade was especially noticeable in the cities, where a national market for commodities such as oil, copper, salt, and tea had appeared.
The Chinese economy had never been more productive. Faster and more reliable transportation and a better system of money and banking had begun to create the foundation for a money economy. Foreign investments in China grew rapidly, and the money went into modernizing the Chinese economy. New crops brought in from abroad increased food production and encouraged population growth.
The coming of Westerners to China affected the Chinese economy in three ways. Westerners introduced modern means of transportation and communications, created an export market, and integrated the Chinese market into the nineteenth-century world economy.
To some, these changes were beneficial. Shaking China out of its old ways quickened a process of change that had already begun. Western influences forced the Chinese to adopt new ways of thinking and acting, and Western ideas stimulated the desire to modernize. Westerners also provided something else to the Chinese. They gave them a model, funds, and the technical knowledge to modernize.
At the same time, China paid a heavy price for the new ways. Imperialism imposed a state of dependence on China, and many Chinese were exploited. Imperialism condemned the country to a condition of underdevelopment. Its local industry was largely destroyed. Also, many of the profits in the new economy went to foreign countries rather than back into the Chinese economy.
During the first quarter of the twentieth century, the pace of change in China quickened even more. After World War I, which temporarily drew foreign investment out of the country, Chinese businesspeople began to develop new ventures. Shanghai became the bastion of the new bourgeoisie. People lived in Shanghai at the same rhythm they lived in other modern cities. Wuhan, Tianjin, and Guangzhou also became major industrial and commercial centers with a growing middle class and an industrial working class.
In 1800 daily life in China was the same as it had been for centuries. Most Chinese were farmers, living in millions of villages near rice fields and on hillsides throughout the countryside. A farmer's life was governed by the harvest cycle, village custom, and family ritual. A few men were educated in the Confucian classics. Women stayed at home or in the fields. All children were expected to obey their parents, and wives were expected to submit to the wishes of their husbands.
A visitor to China 125 years later would have seen a different society, although it would still have been recognizably Chinese. The changes were most striking in the cities, among the urban middle class. Here the educated and wealthy had been visibly affected by the growing Western cultural presence. Confucian social ideas were declining rapidly in influence.

<h3>Culture in Transition</h3>
Nowhere in China was the struggle between old and new more visible than in the culture. Radical reformers wanted to eliminate traditional culture, condemning it as an instrument of oppression. They were interested in creating a new China that would be respected by the modern world.
The first changes in traditional culture came in the late nineteenth century. Intellectuals began to introduce Western books, art, and ideas to China. Soon, China was flooded by Western culture as intellectuals called for a new culture based on that of the modern West.
Western literature and art became popular in China, especially among the urban middle class. Traditional culture, however, remained popular, especially in rural areas. Most creative artists followed foreign trends, while traditionalists held on to Chinese culture.
Literature in particular was influenced by foreign ideas. Western novels and short stories began to attract a larger audience. Although most Chinese novels written after World War I dealt with Chinese subjects, they reflected the Western tendency toward a realistic portrayal of society. Often, they dealt with the new Westernized middle class. Most of China's modern authors showed a clear contempt for the past.
Mao Dun became known as one of China's best modern novelists. Midnight, Dun's most popular work, was also published in French and English. A naturalistic novel, Midnight described the changing customs of Shanghai's urban elites.
Ba Jin, the author of numerous novels and short stories, was one of China's foremost writers of the twentieth century. Born in 1904, Ba Jin was well attuned to the rigors and expected obedience of Chinese family life. In his trilogy, Family, Spring, and Autumn, he describes the disintegration of traditional Confucian ways as the younger members of a large family attempt to break away from their elders.
`;
}
