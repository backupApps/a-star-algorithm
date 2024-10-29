const destinations = [];

// Fungsi untuk menambahkan tujuan
function addDestinations() {
   const newDestination = document.createElement("div");
   newDestination.classList.add("destination");
   newDestination.innerHTML = `
        <label for="name">Destinasi:</label>
        <input type="text" class="name" required />
        <br />
        <label for="distance">Jarak dari Titik A (g-cost):</label>
        <input type="number" class="distance" required />
        <br />
        <label for="traffic">Estimasi (h-cost):</label>
        <input type="number" class="traffic" required />
        <br /><br />
    `;
   document.getElementById("destinationInputs").appendChild(newDestination);
}

// Fungsi untuk menampilkan hasil
function results() {
   // Ambil semua tujuan dari input
   const inputDestinations = document.querySelectorAll(".destination");
   destinations.length = 0; // Kosongkan array sebelumnya

   inputDestinations.forEach((destination) => {
      const name = destination.querySelector(".name").value;
      const distanceFromA = parseInt(
         destination.querySelector(".distance").value
      );
      const trafficLevel = parseInt(
         destination.querySelector(".traffic").value
      );

      // Tambahkan tujuan baru ke array destinations
      destinations.push({ name, distanceFromA, trafficLevel });
   });

   // Hitung dan tampilkan f-cost untuk setiap tujuan
   displayResults();
}

// Fungsi untuk menghitung dan menampilkan hasil f-cost
function displayResults() {
   const results = document.getElementById("results");
   results.innerHTML = ""; // Kosongkan hasil sebelumnya

   destinations.forEach((destination) => {
      // Hitung f-cost
      const fCost = destination.distanceFromA + destination.trafficLevel;

      // Tampilkan f-cost untuk tujuan ini
      const li = document.createElement("li");
      li.textContent = `Titik ${destination.name}: f-cost = ${fCost}`;
      results.appendChild(li);
   });
}
