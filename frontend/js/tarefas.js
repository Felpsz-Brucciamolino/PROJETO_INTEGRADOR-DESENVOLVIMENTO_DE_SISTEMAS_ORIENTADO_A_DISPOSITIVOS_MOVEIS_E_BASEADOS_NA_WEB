// pagina de tarefas - quadro kanban

document.addEventListener("DOMContentLoaded", async () => {
    verificarSessao();
    await preencherObras();
});

async function preencherObras() {
    const res = await ObrasAPI.listar();
    if (!res.sucesso) return;

    const selects = document.querySelectorAll(".select-obra");
    const obras = Array.isArray(res.dados) ? res.dados : [];

    selects.forEach(sel => {
        sel.innerHTML = '<option value="">Todas as obras</option>';
        obras.forEach(o => {
            sel.innerHTML += `<option value="${o.id}">${o.nome || "Obra"}</option>`;
        });
    });
}
