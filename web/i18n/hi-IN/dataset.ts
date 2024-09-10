const translation = {
  knowledge: 'ज्ञान',
  documentCount: ' दस्तावेज़',
  wordCount: ' के शब्द',
  appCount: ' जुड़े हुए ऐप्स',
  createDataset: 'ज्ञान बनाएं',
  createDatasetIntro:
    'अपना खुद का टेक्स्ट डेटा आयात करें या एलएलएम संदर्भ वृद्धि के लिए वेबहुक के माध्यम से वास्तविक समय में डेटा लिखें।',
  deleteDatasetConfirmTitle: 'क्या आप यह ज्ञान हटाना चाहते हैं?',
  deleteDatasetConfirmContent:
    'ज्ञान को हटाना अपरिवर्तनीय है। उपयोगकर्ता अब आपके ज्ञान को प्राप्त नहीं कर पाएंगे, और सभी प्रॉम्प्ट कॉन्फ़िगरेशन और लॉग स्थायी रूप से मिटा दिए जाएंगे।',
  datasetUsedByApp: 'यह ज्ञान कुछ ऐप्स द्वारा उपयोग किया जा रहा है। ऐप्स अब इस ज्ञान का उपयोग नहीं कर पाएंगे, और सभी प्रॉम्प्ट कॉन्फ़िगरेशन और लॉग स्थायी रूप से हटा दिए जाएंगे।',
  datasetDeleted: 'ज्ञान हटा दिया गया',
  datasetDeleteFailed: 'ज्ञान हटाने में विफल',
  didYouKnow: 'क्या आप जानते हैं?',
  intro1: 'ज्ञान को Dify एप्लिकेशन में ',
  intro2: 'एक संदर्भ के रूप में ',
  intro3: ',',
  intro4: 'या यह ',
  intro5: 'बनाया जा सकता है',
  intro6:
    ' एक स्वतंत्र ChatGPT इंडेक्स प्लग-इन के रूप में प्रकाशित करने के लिए',
  unavailable: 'उपलब्ध नहीं',
  unavailableTip:
    'एम्बेडिंग मॉडल उपलब्ध नहीं है, डिफ़ॉल्ट एम्बेडिंग मॉडल को कॉन्फ़िगर किया जाना चाहिए',
  datasets: 'ज्ञान',
  datasetsApi: 'API पहुँच',
  retrieval: {
    semantic_search: {
      title: 'वेक्टर खोज',
      description:
        'प्रश्न एम्बेडिंग्स उत्पन्न करें और उसके वेक्टर प्रतिनिधित्व के समान सबसे मिलते-जुलते टेक्स्ट चंक को खोजें।',
    },
    full_text_search: {
      title: 'पूर्ण-पाठ खोज',
      description:
        'दस्तावेज़ में सभी शब्दों को सूचकांकित करें, उपयोगकर्ताओं को किसी भी शब्द को खोजने और उन शब्दों को युक्त टेक्स्ट चंक प्राप्त करने की अनुमति देता है।',
    },
    hybrid_search: {
      title: 'हाइब्रिड खोज',
      description:
        'पूर्ण-पाठ खोज और वेक्टर खोजों को एक साथ निष्पादित करें, पुनः रैंकिंग करें और उपयोगकर्ता के प्रश्न के लिए सर्वोत्तम मिलान का चयन करें। रीरैंक मॉडल APIs की कॉन्फ़िगरेशन आवश्यक।',
      recommend: 'सिफारिश',
    },
    invertedIndex: {
      title: 'उल्टा सूचकांक',
      description:
        'उल्टा सूचकांक एक ऐसी संरचना है जो कुशल पुनर्प्राप्ति के लिए उपयोग की जाती है। यह शब्दों द्वारा व्यवस्थित होती है, प्रत्येक शब्द उन दस्तावेज़ों या वेब पेजों की ओर इंगित करता है जिनमें वह होता है।',
    },
    change: 'बदलें',
    changeRetrievalMethod: 'पुनर्प्राप्ति विधि बदलें',
  },
  docsFailedNotice: 'दस्तावेज़ों को अनुक्रमित करने में विफल',
  retry: 'पुनः प्रयास करें',
  indexingTechnique: {
    high_quality: 'उच्च गुणवत्ता',
    economy: 'किफायती',
  },
  indexingMethod: {
    semantic_search: 'वेक्टर',
    full_text_search: 'पूर्ण पाठ',
    hybrid_search: 'हाइब्रिड',
    invertedIndex: 'उल्टा',
  },
  mixtureHighQualityAndEconomicTip: 'उच्च गुणवत्ता और किफायती ज्ञान आधारों के मिश्रण के लिए पुनः रैंकिंग मॉडल आवश्यक है।',
  inconsistentEmbeddingModelTip: 'यदि चयनित ज्ञान आधारों के एम्बेडिंग मॉडल असंगत हैं, तो पुनः रैंकिंग मॉडल आवश्यक है।',
  retrievalSettings: 'पुनर्प्राप्ति सेटिंग्स',
  rerankSettings: 'पुनः रैंकिंग सेटिंग्स',
  weightedScore: {
    title: 'भारित स्कोर',
    description: 'आवंटित भारों को समायोजित करके, यह पुनः रैंकिंग रणनीति निर्धारित करती है कि शब्दार्थ या कीवर्ड मिलान को प्राथमिकता दी जाए।',
    semanticFirst: 'शब्दार्थ पहले',
    keywordFirst: 'कीवर्ड पहले',
    customized: 'अनुकूलित',
    semantic: 'शब्दार्थ',
    keyword: 'कीवर्ड',
  },
  nTo1RetrievalLegacy: 'N-से-1 पुनर्प्राप्ति सितंबर से आधिकारिक तौर पर बंद कर दी जाएगी। बेहतर परिणाम प्राप्त करने के लिए नवीनतम बहु-मार्ग पुनर्प्राप्ति का उपयोग करने की सिफारिश की जाती है।',
  nTo1RetrievalLegacyLink: 'और जानें',
  nTo1RetrievalLegacyLinkText: 'N-से-1 पुनर्प्राप्ति सितंबर में आधिकारिक तौर पर बंद कर दी जाएगी।',
  defaultRetrievalTip: 'मल्टी-पाथ रिट्रीवल का उपयोग डिफ़ॉल्ट रूप से किया जाता है। ज्ञान को कई ज्ञान आधारों से पुनर्प्राप्त किया जाता है और फिर फिर से रैंक किया जाता है।',
}

export default translation
