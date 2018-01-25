//data
let generics = [
    "Levothyroxine",
    "Hydrocodone/APAP",
    "Amoxicillin",
    "Lisinopril",
    "Esomeprazole",
    "Atorvastatin",
    "Simvastatin",
    "Clopidogrel",
    "Montelukast",
    "Rosuvastatin",
    "Metoprolol",
    "Escitalopram",
    "Azithromycin",
    "Albuterol",
    "Hydrochlorothiazide",
    "Metformin",
    "Sertraline",
    "Ibuprofen",
    "Zolpidem",
    "Furosemide",
    "Omeprazole",
    "Trazodone",
    "Valsartan",
    "Tramadol",
    "Duloxetine",
    "Warfarin",
    "Amlodipine",
    "Oxycodone/APAP",
    "Quetiapine",
    "Promethazine",
    "Fluticasone",
    "Alprazolam",
    "Clonazepam",
    "Benazepril",
    "Meloxicam",
    "Citalopram",
    "Cephalexin",
    "Tiotropium",
    "Gabapentin",
    "Aripiprazole",
    "Potassium",
    "Cyclobenzaprine",
    "Methylprednisolone",
    "Methylphenidate",
    "Loratadine",
    "Carvedilol",
    "Carisoprodol",
    "Digoxin",
    "Memantine",
    "Atenolol",
    "Diazepam",
    "Oxycodone",
    "Risedronate",
    "Folic Acid",
    "Losartan/HCTZ",
    "Prednisone",
    "Prednisolone",
    "Alendronate",
    "Pantoprazole",
    "Tamsulosin",
    "Triamterene/HCTZ",
    "Paroxetine",
    "Buprenorphine/Naloxone",
    "Enalapril",
    "Lovastatin",
    "Pioglitazone",
    "Pravastatin",
    "Fluoxetine",
    "Insulin Detemir",
    "Fluconazole",
    "Levofloxacin",
    "Rivaroxaban",
    "Celecoxib",
    "Codeine/APAP",
    "Mometasone",
    "Ciprofloxacin",
    "Pregabalin",
    "Insulin Aspart",
    "Venlafaxine",
    "Lorazepam",
    "Ezetimibe",
    "Estrogen",
    "Allopurinol",
    "Penicillin",
    "Sitagliptin",
    "Amitriptyline",
    "Clonidine",
    "Latanoprost",
    "Lisdexamfetamine",
    "Fluticasone/Salmeterol",
    "Budesonide/Formoterol",
    "Dexlansoprazole",
    "Glyburide",
    "Olanzapine",
    "Tolterodine",
    "Ranitidine",
    "Famotidine",
    "Diltiazem",
    "Insulin Glargine",
    "Lisinopril/HCTZ",
    "Bupropion",
    "Cetirizine",
    "Topiramate",
    "Valacyclovir",
    "Eszopiclone",
    "Acyclovir",
    "Cefdinir",
    "Clindamycin",
    "Levetiracetam",
    "Gemfibrozil",
    "Guaifenesin",
    "Glipizide",
    "Irbesartan",
    "Metoclopramide",
    "Losartan",
    "Meclizine",
    "Metronidazole",
    "Vitamin D",
    "Testosterone",
    "Ropinirole",
    "Risperidone",
    "Olopatadine",
    "Donepezil",
    "Dexmethylphenidate",
    "Enoxaparin",
    "Fentanyl",
    "Dicyclomine",
    "Levalbuterol",
    "Atomoxetine",
    "Ramipril",
    "Temazepam",
    "Phentermine",
    "Quinapril",
    "Sildenafil",
    "Ondansetron",
    "Oseltamivir",
    "Methotrexate",
    "Dabigatran",
    "Budesonide",
    "Doxazosin",
    "Desvenlafaxine",
    "Insulin Lispro",
    "Clarithromycin",
    "Buspirone",
    "Finasteride",
    "Ketoconazole",
    "Solifenacin",
    "Methadone",
    "Minocycline",
    "Phenazopyridine",
    "Spironolactone",
    "Vardenafil",
    "Clobetasol",
    "Benzonatate",
    "Divalproex",
    "Dutasteride",
    "Febuxostat",
    "Lamotrigine",
    "Nortriptyline",
    "Glimepiride",
    "Rabeprazole",
    "Etanercept",
    "Nebivolol",
    "Nabumetone",
    "Nifedipine",
    "Nitrofurantoin",
    "Nitroglycerine",
    "Oxybutynin",
    "Tadalifil",
    "Triamcinolone",
    "Rivastigmine",
    "Lansoprazole",
    "Cefuroxime",
    "Methocarbamol",
    "Travoprost",
    "Lurasidone",
    "Terazosin",
    "Sumatriptan",
    "Raloxifene",
    "Mirtazepine",
    "Adalimumab",
    "Benztropine",
    "Baclofen",
    "Hydralazine",
    "Mupirocin",
    "Propranolol",
    "Nystatin",
    "Verapamil",
    "Estradiol",
    "Phenytoin",
    "Fenofibrate",
    "Liraglutide",
    "Ticagrelor",
    "Diclofenac",
    "Saxagliptin",
    "Naproxen",
    "Tizanidine",
    "Amphetamine/Dextroamphetamine",
    "Amoxicillin/Clavulanate",
    "Ezetimibe/Simvastatin"
];

let brands = [
    "Synthroid®",
    "Vicodin®",
    "Amoxil®",
    "Prinivil®",
    "Nexium®",
    "Lipitor®",
    "Zocor®",
    "Plavix®",
    "Singulair®",
    "Crestor®",
    "Lopressor®",
    "Lexapro®",
    "Zithromax®",
    "ProAir®",
    "Microzide®",
    "Glucophage®",
    "Zoloft®",
    "Advil®",
    "Ambien®",
    "Lasix®",
    "Prilosec®",
    "Desyrel®",
    "Diovan®",
    "Ultram®",
    "Cymbalta®",
    "Coumadin®",
    "Norvasc®",
    "Percocet®",
    "Seroquel®",
    "Phenergan®",
    "Flonase®",
    "Xanax®",
    "Klonopin®",
    "Lotensin®",
    "Mobic®",
    "Celexa®",
    "Keflex®",
    "Spiriva®",
    "Neurontin®",
    "Abilify®",
    "K-Tab®",
    "Flexeril®",
    "Medrol®",
    "Concerta®",
    "Claritin®",
    "Coreg®",
    "Soma®",
    "Lanoxin®",
    "Namenda®",
    "Tenormin®",
    "Valium®",
    "OxyContin®",
    "Actonel®",
    "Folvite®",
    "Hyzaar®",
    "Deltasone®",
    "Omnipred®",
    "Fosamax®",
    "Protonix®",
    "Flomax®",
    "Dyazide®",
    "Paxil®",
    "Suboxone®",
    "Vasotec®",
    "Mevacor®",
    "Actos®",
    "Pravachol®",
    "Prozac®",
    "Levemir®",
    "Diflucan®",
    "Levaquin®",
    "Xarelto®",
    "Celebrex®",
    "Tylenol® #3",
    "Nasonex®",
    "Cipro®",
    "Lyrica®",
    "Novolog®",
    "Effexor®",
    "Ativan®",
    "Zetia®",
    "Premarin®",
    "Zyloprim®",
    "Pen VK®",
    "Januvia®",
    "Elavil®",
    "Catapres®",
    "Xalatan®",
    "Vyvanse®",
    "Advair®",
    "Symbicort®",
    "Dexilant®",
    "Diabeta®",
    "Zyprexa®",
    "Detrol®",
    "Zantac®",
    "Pepcid®",
    "Cardizem®",
    "Lantus®",
    "Prinizide®",
    "Wellbutrin®",
    "Zyrtec®",
    "Topamax®",
    "Valtrex®",
    "Lunesta®",
    "Zovirax®",
    "Omnicef®",
    "Cleocin®",
    "Keppra®",
    "Lopid®",
    "Robitussin®",
    "Glucotrol®",
    "Avapro®",
    "Reglan®",
    "Cozaar®",
    "Dramamine®",
    "Flagyl®",
    "Caltrate®",
    "AndroGel®",
    "Requip®",
    "Risperdal®",
    "Patanol®",
    "Aricept®",
    "Focalin®",
    "Lovenox®",
    "Duragesic®",
    "Bentyl®",
    "Xopenex®",
    "Strattera®",
    "Altace®",
    "Restoril®",
    "Adipex® P",
    "Accupril®",
    "Viagra®",
    "Zofran®",
    "Tamiflu®",
    "Rheumatrex®",
    "Pradaxa®",
    "Uceris®",
    "Cardura®",
    "Pristiq®",
    "Humalog®",
    "Biaxin®",
    "Buspar®",
    "Proscar®",
    "Nizoral®",
    "VESIcare®",
    "Dolophine®",
    "Minocin®",
    "Pyridium®",
    "Aldactone®",
    "Levitra®",
    "Clovate®",
    "Tessalon®",
    "Depakote®",
    "Avodart®",
    "Uloric®",
    "Lamictal®",
    "Pamelor®",
    "Amaryl®",
    "Aciphex®",
    "Enbrel®",
    "Bystolic®",
    "Relafen®",
    "Procardia®",
    "Macrobid®",
    "NitroStat® SL",
    "Ditropan®",
    "Cialis®",
    "Kenalog®",
    "Exelon®",
    "Prevacid®",
    "Ceftin®",
    "Robaxin®",
    "Travatan®",
    "Latuda®",
    "Hytrin®",
    "Imitrex®",
    "Evista®",
    "Remeron®",
    "Humira®",
    "Cogentin®",
    "Gablofen®",
    "Apresoline®",
    "Bactroban®",
    "Inderal®",
    "Mycostatin®",
    "Verelan®",
    "Estrace®",
    "Dilantin®",
    "Tricor®",
    "Victoza®",
    "Brilinta®",
    "Voltaren®",
    "Onglyza®",
    "Aleve®",
    "Zanaflex®",
    "Adderall®",
    "Augmentin®",
    "Vytorin®"
];

function reset() {
    generics = [
      "Levothyroxine",
      "Hydrocodone/APAP",
      "Amoxicillin",
      "Lisinopril",
      "Esomeprazole",
      "Atorvastatin",
      "Simvastatin",
      "Clopidogrel",
      "Montelukast",
      "Rosuvastatin",
      "Metoprolol",
      "Escitalopram",
      "Azithromycin",
      "Albuterol",
      "Hydrochlorothiazide",
      "Metformin",
      "Sertraline",
      "Ibuprofen",
      "Zolpidem",
      "Furosemide",
      "Omeprazole",
      "Trazodone",
      "Valsartan",
      "Tramadol",
      "Duloxetine",
      "Warfarin",
      "Amlodipine",
      "Oxycodone/APAP",
      "Quetiapine",
      "Promethazine",
      "Fluticasone",
      "Alprazolam",
      "Clonazepam",
      "Benazepril",
      "Meloxicam",
      "Citalopram",
      "Cephalexin",
      "Tiotropium",
      "Gabapentin",
      "Aripiprazole",
      "Potassium",
      "Cyclobenzaprine",
      "Methylprednisolone",
      "Methylphenidate",
      "Loratadine",
      "Carvedilol",
      "Carisoprodol",
      "Digoxin",
      "Memantine",
      "Atenolol",
      "Diazepam",
      "Oxycodone",
      "Risedronate",
      "Folic Acid",
      "Losartan/HCTZ",
      "Prednisone",
      "Prednisolone",
      "Alendronate",
      "Pantoprazole",
      "Tamsulosin",
      "Triamterene/HCTZ",
      "Paroxetine",
      "Buprenorphine/Naloxone",
      "Enalapril",
      "Lovastatin",
      "Pioglitazone",
      "Pravastatin",
      "Fluoxetine",
      "Insulin Detemir",
      "Fluconazole",
      "Levofloxacin",
      "Rivaroxaban",
      "Celecoxib",
      "Codeine/APAP",
      "Mometasone",
      "Ciprofloxacin",
      "Pregabalin",
      "Insulin Aspart",
      "Venlafaxine",
      "Lorazepam",
      "Ezetimibe",
      "Estrogen",
      "Allopurinol",
      "Penicillin",
      "Sitagliptin",
      "Amitriptyline",
      "Clonidine",
      "Latanoprost",
      "Lisdexamfetamine",
      "Fluticasone/Salmeterol",
      "Budesonide/Formoterol",
      "Dexlansoprazole",
      "Glyburide",
      "Olanzapine",
      "Tolterodine",
      "Ranitidine",
      "Famotidine",
      "Diltiazem",
      "Insulin Glargine",
      "Lisinopril/HCTZ",
      "Bupropion",
      "Cetirizine",
      "Topiramate",
      "Valacyclovir",
      "Eszopiclone",
      "Acyclovir",
      "Cefdinir",
      "Clindamycin",
      "Levetiracetam",
      "Gemfibrozil",
      "Guaifenesin",
      "Glipizide",
      "Irbesartan",
      "Metoclopramide",
      "Losartan",
      "Meclizine",
      "Metronidazole",
      "Vitamin D",
      "Testosterone",
      "Ropinirole",
      "Risperidone",
      "Olopatadine",
      "Donepezil",
      "Dexmethylphenidate",
      "Enoxaparin",
      "Fentanyl",
      "Dicyclomine",
      "Levalbuterol",
      "Atomoxetine",
      "Ramipril",
      "Temazepam",
      "Phentermine",
      "Quinapril",
      "Sildenafil",
      "Ondansetron",
      "Oseltamivir",
      "Methotrexate",
      "Dabigatran",
      "Budesonide",
      "Doxazosin",
      "Desvenlafaxine",
      "Insulin Lispro",
      "Clarithromycin",
      "Buspirone",
      "Finasteride",
      "Ketoconazole",
      "Solifenacin",
      "Methadone",
      "Minocycline",
      "Phenazopyridine",
      "Spironolactone",
      "Vardenafil",
      "Clobetasol",
      "Benzonatate",
      "Divalproex",
      "Dutasteride",
      "Febuxostat",
      "Lamotrigine",
      "Nortriptyline",
      "Glimepiride",
      "Rabeprazole",
      "Etanercept",
      "Nebivolol",
      "Nabumetone",
      "Nifedipine",
      "Nitrofurantoin",
      "Nitroglycerine",
      "Oxybutynin",
      "Tadalifil",
      "Triamcinolone",
      "Rivastigmine",
      "Lansoprazole",
      "Cefuroxime",
      "Methocarbamol",
      "Travoprost",
      "Lurasidone",
      "Terazosin",
      "Sumatriptan",
      "Raloxifene",
      "Mirtazepine",
      "Adalimumab",
      "Benztropine",
      "Baclofen",
      "Hydralazine",
      "Mupirocin",
      "Propranolol",
      "Nystatin",
      "Verapamil",
      "Estradiol",
      "Phenytoin",
      "Fenofibrate",
      "Liraglutide",
      "Ticagrelor",
      "Diclofenac",
      "Saxagliptin",
      "Naproxen",
      "Tizanidine",
      "Amphetamine/Dextroamphetamine",
      "Amoxicillin/Clavulanate",
      "Ezetimibe/Simvastatin"
  ];

    brands = [
      "Synthroid®",
      "Vicodin®",
      "Amoxil®",
      "Prinivil®",
      "Nexium®",
      "Lipitor®",
      "Zocor®",
      "Plavix®",
      "Singulair®",
      "Crestor®",
      "Lopressor®",
      "Lexapro®",
      "Zithromax®",
      "ProAir®",
      "Microzide®",
      "Glucophage®",
      "Zoloft®",
      "Advil®",
      "Ambien®",
      "Lasix®",
      "Prilosec®",
      "Desyrel®",
      "Diovan®",
      "Ultram®",
      "Cymbalta®",
      "Coumadin®",
      "Norvasc®",
      "Percocet®",
      "Seroquel®",
      "Phenergan®",
      "Flonase®",
      "Xanax®",
      "Klonopin®",
      "Lotensin®",
      "Mobic®",
      "Celexa®",
      "Keflex®",
      "Spiriva®",
      "Neurontin®",
      "Abilify®",
      "K-Tab®",
      "Flexeril®",
      "Medrol®",
      "Concerta®",
      "Claritin®",
      "Coreg®",
      "Soma®",
      "Lanoxin®",
      "Namenda®",
      "Tenormin®",
      "Valium®",
      "OxyContin®",
      "Actonel®",
      "Folvite®",
      "Hyzaar®",
      "Deltasone®",
      "Omnipred®",
      "Fosamax®",
      "Protonix®",
      "Flomax®",
      "Dyazide®",
      "Paxil®",
      "Suboxone®",
      "Vasotec®",
      "Mevacor®",
      "Actos®",
      "Pravachol®",
      "Prozac®",
      "Levemir®",
      "Diflucan®",
      "Levaquin®",
      "Xarelto®",
      "Celebrex®",
      "Tylenol® #3",
      "Nasonex®",
      "Cipro®",
      "Lyrica®",
      "Novolog®",
      "Effexor®",
      "Ativan®",
      "Zetia®",
      "Premarin®",
      "Zyloprim®",
      "Pen VK®",
      "Januvia®",
      "Elavil®",
      "Catapres®",
      "Xalatan®",
      "Vyvanse®",
      "Advair®",
      "Symbicort®",
      "Dexilant®",
      "Diabeta®",
      "Zyprexa®",
      "Detrol®",
      "Zantac®",
      "Pepcid®",
      "Cardizem®",
      "Lantus®",
      "Prinizide®",
      "Wellbutrin®",
      "Zyrtec®",
      "Topamax®",
      "Valtrex®",
      "Lunesta®",
      "Zovirax®",
      "Omnicef®",
      "Cleocin®",
      "Keppra®",
      "Lopid®",
      "Robitussin®",
      "Glucotrol®",
      "Avapro®",
      "Reglan®",
      "Cozaar®",
      "Dramamine®",
      "Flagyl®",
      "Caltrate®",
      "AndroGel®",
      "Requip®",
      "Risperdal®",
      "Patanol®",
      "Aricept®",
      "Focalin®",
      "Lovenox®",
      "Duragesic®",
      "Bentyl®",
      "Xopenex®",
      "Strattera®",
      "Altace®",
      "Restoril®",
      "Adipex® P",
      "Accupril®",
      "Viagra®",
      "Zofran®",
      "Tamiflu®",
      "Rheumatrex®",
      "Pradaxa®",
      "Uceris®",
      "Cardura®",
      "Pristiq®",
      "Humalog®",
      "Biaxin®",
      "Buspar®",
      "Proscar®",
      "Nizoral®",
      "VESIcare®",
      "Dolophine®",
      "Minocin®",
      "Pyridium®",
      "Aldactone®",
      "Levitra®",
      "Clovate®",
      "Tessalon®",
      "Depakote®",
      "Avodart®",
      "Uloric®",
      "Lamictal®",
      "Pamelor®",
      "Amaryl®",
      "Aciphex®",
      "Enbrel®",
      "Bystolic®",
      "Relafen®",
      "Procardia®",
      "Macrobid®",
      "NitroStat® SL",
      "Ditropan®",
      "Cialis®",
      "Kenalog®",
      "Exelon®",
      "Prevacid®",
      "Ceftin®",
      "Robaxin®",
      "Travatan®",
      "Latuda®",
      "Hytrin®",
      "Imitrex®",
      "Evista®",
      "Remeron®",
      "Humira®",
      "Cogentin®",
      "Gablofen®",
      "Apresoline®",
      "Bactroban®",
      "Inderal®",
      "Mycostatin®",
      "Verelan®",
      "Estrace®",
      "Dilantin®",
      "Tricor®",
      "Victoza®",
      "Brilinta®",
      "Voltaren®",
      "Onglyza®",
      "Aleve®",
      "Zanaflex®",
      "Adderall®",
      "Augmentin®",
      "Vytorin®"
  ];
};




//called functions for running
const imageArray = [
    "url('bimgs/aerial.jpg')",
    "url('bimgs/amazing.jpg')",
    "url('bimgs/arch.jpg')",
    "url('bimgs/beachin.jpeg')",
    "url('bimgs/boatdock.jpeg')",
    "url('bimgs/butterfly.jpeg')",
    "url('bimgs/city.jpeg')",
    "url('bimgs/dock.jpeg')",
    "url('bimgs/mtn.jpeg')",
    "url('bimgs/mtndock.jpeg')",
    "url('bimgs/phu.jpg')",
    "url('bimgs/poppy.jpg')",
    "url('bimgs/sky1.png')",
    "url('bimgs/sky2.jpeg')",
    "url('bimgs/sunset.jpeg')",
    "url('bimgs/tree.jpg')"
];
shuffle(imageArray);
setBackground();
create();

const moveCounter = document.getElementById('questionCounter');
const one = "1 of 5";
const two = "2 of 5";
const three = "3 of 5";
const four = "4 of 5";
const five = "5 of 5";

//moveCounter.innerHTML = one




//functions cabinet





const searchBox1 = document.getElementById('searchBox');
const searchBox2 = document.getElementById('searchBoxx');
const searchBox3 = document.getElementById('searchBoxxx');
const searchBar1 = document.getElementById('searchBar');
const searchBar2 = document.getElementById('searchBar2');
const searchBar3 = document.getElementById('searchBar3');
const searchBtn1 = document.getElementById('searchBtn');
const searchBtn2 = document.getElementById('searchBtn2');
const searchBtn3 = document.getElementById('searchBtn3');

searchBox1.addEventListener('mouseover', function () {
  searchBar1.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
  searchBtn1.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
});

searchBox1.addEventListener('mouseout', function () {
  searchBar1.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
  searchBtn1.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});

searchBox2.addEventListener('mouseover', function () {
  searchBar2.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
  searchBtn2.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
});

searchBox2.addEventListener('mouseout', function () {
  searchBar2.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
  searchBtn2.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});

searchBox3.addEventListener('mouseover', function () {
  searchBar3.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
  searchBtn3.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
});

searchBox3.addEventListener('mouseout', function () {
  searchBar3.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
  searchBtn3.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});



function setBackground() {
  document.body.style.backgroundImage = imageArray[0];
};

function nextQuestionCorrect() {
  //moveCounterUp();
  setTimeout(function () {
    answerOptions.innerHTML = "";
    create();
  }, 200);
}

function nextQuestionWrong() {
  //moveCounterUp();
  setTimeout(function () {
    answerOptions.innerHTML = "";
    create();
  }, 1500);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create() {
    let num = randomInt(0, (generics.length - 1));
    const question = document.createElement('h4');
    const correctAnswer = document.createElement('button');
    const wrongOption1 = document.createElement('button');
    const wrongOption2 = document.createElement('button');
    const wrongOption3 = document.createElement('button');
    question.innerText = generics[num];
    correctAnswer.innerText = brands[num];
    generics.splice(num, 1);
    brands.splice(num, 1);
    shuffle(generics);
    shuffle(brands);
    wrongOption1.innerText = brands[1];
    wrongOption2.innerText = brands[2];
    wrongOption3.innerText = brands[3];

    correctAnswer.addEventListener('click', function () {
      correctAnswer.classList.add("green");

      nextQuestionCorrect();
    });

    wrongOption1.addEventListener('click', function () {
        wrongOption1.classList.add("red");
        wrongOption2.classList.add("red");
        wrongOption3.classList.add("red");
        correctAnswer.classList.add("green");

        nextQuestionWrong();
    });

    wrongOption2.addEventListener('click', function () {
        wrongOption1.classList.add("red");
        wrongOption2.classList.add("red");
        wrongOption3.classList.add("red");
        correctAnswer.classList.add("green");

        nextQuestionWrong();
    });

    wrongOption3.addEventListener('click', function () {
        wrongOption1.classList.add("red");
        wrongOption2.classList.add("red");
        wrongOption3.classList.add("red");
        correctAnswer.classList.add("green");

        nextQuestionWrong();
    });


    const display = [correctAnswer, wrongOption1, wrongOption2, wrongOption3];
    shuffle(display);

    answerOptions.appendChild(question);
    answerOptions.appendChild(display[0]);
    answerOptions.appendChild(display[1]);
    answerOptions.appendChild(display[2]);
    answerOptions.appendChild(display[3]);

    reset();
};






// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const linksBox = document.getElementById('linksBox');
const linksLogo = document.getElementById('linksLogo');
const closeLinks = document.getElementById('closeLinks');

linksLogo.addEventListener('mouseover', function () {
  linksLogo.style.display = 'none';
  linksBox.style.display = 'block';

});

closeLinks.addEventListener('mouseover', function () {
  linksLogo.style.display = 'block';
  linksBox.style.display = 'none';
});



const calcsBox = document.getElementById('calcsBox');
const calcsLogo = document.getElementById('calcsLogo');
const closeCalcs = document.getElementById('closeCalcs');

calcsLogo.addEventListener('mouseover', function () {
  calcsLogo.style.display = 'none';
  calcsBox.style.display = 'block';
  
});

closeCalcs.addEventListener('mouseover', function () {
  calcsLogo.style.display = 'block';
  calcsBox.style.display = 'none';
});


//Todo list stuff
