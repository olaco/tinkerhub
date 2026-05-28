document.getElementById('render-snapshot-trigger').addEventListener('click', () => {
            const containerNode = document.getElementById('multiverse-ecard');
            
            const captureOptions = {
                backgroundColor: '#030008',
                scale: 3, 
                logging: false,
                useCORS: true,
                allowTaint: true
            };
            
            html2canvas(containerNode, captureOptions).then(renderedCanvas => {
                const triggerAnchor = document.createElement('a');
                triggerAnchor.download = 'Oladapo_Cole_Multiverse_Card.png';
                triggerAnchor.href = renderedCanvas.toDataURL('image/png');
                triggerAnchor.click();
            }).catch(err => {
                console.error("Snapshot canvas pipeline fault:", err);
            });
        });
