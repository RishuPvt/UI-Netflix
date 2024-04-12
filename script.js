
const btn = document.querySelector(".toogle");
const signin = document.querySelector(".signin");
const btn2=document.querySelector(".btn2")
const login=document.querySelector(".login")
const quetions=document.querySelector(".span")

// Select all h2 elements
const headings = document.querySelectorAll("h2");
// Select all p elements
const paragraphs = document.querySelectorAll("p");

btn.addEventListener("click", () => {
  btn.innerHTML = "English";

  // Loop through each h2 element
  headings.forEach((heading, index) => {
    // Assign different tasks based on the index
    switch (index) {
      case 0:
        // Task for the first h2 element
        heading.textContent = "अपने टीवी पर आनंद लें";
        break;
      case 1:
        // Task for the second h2 element
        heading.textContent = "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें";
        break;
      case 2:
        // Task for the third h2 element
        heading.textContent = "हर जगह देखें";
        break;
      case 3:
        heading.textContent = "बच्चों के लिए प्रोफ़ाइल बनाएं";
      // Add more cases for additional h2 elements as needed
      default:
        break;
    }
  });

  // Loop through each p element
  paragraphs.forEach((paragraph, index) => {
    // Assign different tasks based on the index
    switch (index) {
      case 0:
        // Task for the first p element
        paragraph.textContent =
          "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.";
        break;
      case 1:
        // Task for the second p element
        paragraph.textContent =
          "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.";
        break;
      case 2:
        // Task for the third p element
        paragraph.textContent =
          "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.";
        break;
      case 3:
        // Task for the third p element
        paragraph.textContent =
          "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.";
        break;
      // Add more cases for additional p elements as needed
      default:
        break;
    }
  });
  quetions.textContent="कोई सवाल है? 000-800-919-1694 पर कॉल करें"
  signin.textContent="साइन इन"
  signin.style.padding = "4px"
  login.placeholder="ईमेल एड्रेस"
  btn2.textContent="शुरू करें"
});