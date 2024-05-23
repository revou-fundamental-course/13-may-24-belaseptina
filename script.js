function hitungLuas() {
            const alas = parseFloat(document.getElementById('alas').value);
            const tinggi = parseFloat(document.getElementById('tinggi').value);

            if (isNaN(alas) || isNaN(tinggi)) {
                document.getElementById('result').textContent = 'Harap masukkan nilai alas dan tinggi';
                return;
            }

            const luas = 0.5 * alas * tinggi;
            document.getElementById('result').textContent = `L = 1/2 x ${alas} x ${tinggi}\nL = ${luas}`;
        }

        function resetForm() {
            document.getElementById('alas').value = '';
            document.getElementById('tinggi').value = '';
            document.getElementById('result').textContent = '';
        }

        function hitungKeliling() {
            const s1 = parseFloat(document.getElementById('s1').value);
            const s2 = parseFloat(document.getElementById('s2').value);
            const s3 = parseFloat(document.getElementById('s3').value);

            if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
                document.getElementById('resultKeliling').textContent = 'Harap masukkan semua sisi';
                return;
            }

            const keliling = s1 + s2 + s3;
            document.getElementById('resultKeliling').textContent = `K = S1 + S2 + S3\nK = ${s1} + ${s2} + ${s3}\nK = ${keliling}`;
        }

        function resetFormKeliling() {
            document.getElementById('s1').value = '';
            document.getElementById('s2').value = '';
            document.getElementById('s3').value = '';
            document.getElementById('resultKeliling').textContent = '';
        }