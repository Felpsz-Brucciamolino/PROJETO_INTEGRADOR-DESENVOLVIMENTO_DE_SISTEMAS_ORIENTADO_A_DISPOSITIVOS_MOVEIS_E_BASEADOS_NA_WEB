package br.com.ProjetoIntegrador.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "obras")
public class Obra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String cliente;
    private String endereco;

    @JsonIgnoreProperties("tarefas")
    @OneToMany(mappedBy = "obra")
    private List<Tarefa> tarefas;

    @Column(name = "orcamento")
    @JsonProperty("orcamento")
    private BigDecimal orcamento;

    @Column(name = "data_inicio")
    @JsonProperty("data_inicio")
    private LocalDate dataInicio;

    @Column(name = "data_prevista_fim")
    @JsonProperty("data_prevista_fim")
    private LocalDate previsaoEntrega;

    @JsonProperty("descricao")
    private String observacoes;

    @Column(name = "status")
    private String status;

    @ManyToOne
    @JoinColumn(name = "responsavel_id")
    private Usuario responsavel;

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente){
        this.cliente = cliente;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco){
        this.endereco = endereco;
    }

    public BigDecimal getOrcamento() {
        return orcamento;
    }

    public void setOrcamento(BigDecimal orcamento) {
        this.orcamento = orcamento;
    }



    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio){
        this.dataInicio = dataInicio;
    }

    public LocalDate getPrevisaoEntrega() {
        return previsaoEntrega;
    }

    public void setPrevisaoEntrega(LocalDate previsaoEntrega){
        this.previsaoEntrega = previsaoEntrega;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status){
        this.status = status;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes){
        this.observacoes = observacoes;
    }

    public Usuario getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(Usuario responsavel){
        this.responsavel = responsavel;
    }
}