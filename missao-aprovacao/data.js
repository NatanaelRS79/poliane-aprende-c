
const questoes = [
    {
        "id": 1,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em uma rede corporativa, você identifica que dispositivos na VLAN 10 (192.168.10.0/24) precisam se comunicar com servidores na VLAN 20 (192.168.20.0/24). Qual equipamento é essencial para permitir essa comunicação?",
        "alternativas": [
            "Switch Layer 2 com suporte a trunking",
            "Hub gerenciável",
            "Roteador ou Switch Layer 3",
            "Access Point com função bridge"
        ],
        "respostaCorreta": 2,
        "explicacao": "VLANs (Virtual Local Area Networks) são domínios de broadcast isolados logicamente. Para que dispositivos em VLANs diferentes se comuniquem, é necessário um dispositivo de Camada 3 (roteamento inter-VLAN). Um Switch Layer 3 ou um roteador podem realizar o roteamento entre VLANs, pois operam na camada de rede do modelo OSI, processando endereços IP e tomando decisões de encaminhamento baseadas em tabelas de roteamento. Switches Layer 2 apenas segmentam VLANs mas não roteiam entre elas.",
        "nivel": "base"
    },
    {
        "id": 2,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Ao analisar o tráfego de rede com Wireshark, você observa pacotes com TTL (Time To Live) igual a 1. O que isso indica sobre esses pacotes?",
        "alternativas": [
            "Os pacotes foram gerados localmente na mesma sub-rede",
            "Os pacotes estão prestes a ser descartados pelo próximo roteador",
            "Os pacotes têm prioridade máxima no QoS",
            "Os pacotes são do tipo broadcast"
        ],
        "respostaCorreta": 1,
        "explicacao": "O campo TTL (Time To Live) no cabeçalho IP é decrementado em 1 por cada roteador que o pacote atravessa. Quando TTL chega a 0, o roteador descarta o pacote e envia uma mensagem ICMP Time Exceeded de volta ao remetente. Um TTL de 1 significa que o pacote será descartado pelo próximo roteador que o processar. O TTL previne loops de roteamento infinitos. Ferramentas como traceroute usam TTL incrementalmente para mapear a rota de rede.",
        "nivel": "base"
    },
    {
        "id": 3,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Você precisa calcular quantos hosts válidos podem ser endereçados em uma rede 172.16.50.0/22. Qual é o número correto?",
        "alternativas": [
            "254 hosts",
            "510 hosts",
            "1022 hosts",
            "2046 hosts"
        ],
        "respostaCorreta": 2,
        "explicacao": "Uma máscara /22 equivale a 255.255.252.0, deixando 10 bits para hosts (32-22=10). Com 10 bits, temos 2^10 = 1024 endereços totais. Subtraímos 2 endereços (endereço de rede e broadcast), resultando em 1022 hosts válidos. O CIDR /22 é comumente usado para sub-redes de tamanho médio. Fórmula geral: hosts válidos = 2^(bits de host) - 2. Este cálculo é fundamental para planejamento de endereçamento IP e subnetting.",
        "nivel": "base"
    },
    {
        "id": 4,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em uma análise forense de rede, você identifica tráfego usando portas TCP 135, 139 e 445. Qual protocolo e serviço está sendo utilizado?",
        "alternativas": [
            "FTP - Transferência de arquivos",
            "SMB/CIFS - Compartilhamento de arquivos Windows",
            "SNMP - Gerenciamento de rede",
            "RDP - Acesso remoto à área de trabalho"
        ],
        "respostaCorreta": 1,
        "explicacao": "As portas TCP 135, 139 e 445 são associadas ao protocolo SMB (Server Message Block) e serviços relacionados ao Windows. A porta 135 é usada para RPC Endpoint Mapper, 139 para NetBIOS sobre TCP/IP (SMB sobre NetBIOS), e 445 para SMB direto sobre TCP/IP (usado desde Windows 2000). Essas portas são frequentemente alvos de ataques como EternalBlue (WannaCry) e devem ser monitoradas em ambientes de segurança. SMB é crítico para compartilhamento de arquivos e impressoras em redes Windows.",
        "nivel": "base"
    },
    {
        "id": 5,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de roteamento dinâmico utiliza o algoritmo de Dijkstra (SPF - Shortest Path First) e converge mais rapidamente em redes de grande escala?",
        "alternativas": [
            "RIP (Routing Information Protocol)",
            "EIGRP (Enhanced Interior Gateway Routing Protocol)",
            "OSPF (Open Shortest Path First)",
            "BGP (Border Gateway Protocol)"
        ],
        "respostaCorreta": 2,
        "explicacao": "OSPF (Open Shortest Path First) é um protocolo de roteamento link-state que usa o algoritmo de Dijkstra para calcular o caminho mais curto. OSPF é um protocolo padrão aberto (RFC 2328), ao contrário do EIGRP que é proprietário Cisco. OSPF converge rapidamente pois cada roteador tem visão completa da topologia (link-state database). Ele usa multicast 224.0.0.5 e 224.0.0.6 para comunicação. OSPF divide redes grandes em áreas hierárquicas para escalabilidade, sendo ideal para redes corporativas e provedores de serviço.",
        "nivel": "base"
    },
    {
        "id": 6,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em um ambiente de alta disponibilidade, você implementa HSRP (Hot Standby Router Protocol). Qual endereço MAC virtual é usado pelo gateway padrão na versão 1 do HSRP?",
        "alternativas": [
            "00:00:0C:07:AC:XX (onde XX é o grupo HSRP)",
            "01:00:5E:00:00:XX (onde XX é o grupo HSRP)",
            "00:01:00:01:00:XX (onde XX é o grupo HSRP)",
            "00:50:56:XX:XX:XX (onde XX é aleatório)"
        ],
        "respostaCorreta": 0,
        "explicacao": "HSRP (Hot Standby Router Protocol) é um protocolo proprietário Cisco de redundância que permite múltiplos roteadores trabalharem juntos para apresentar um gateway padrão virtual único. Na versão 1, o endereço MAC virtual segue o formato 00:00:0C:07:AC:XX, onde XX é o número do grupo HSRP em hexadecimal. A versão 2 do HSRP usa 00:00:0C:9F:FX:XX. O protocolo elege um roteador ativo (Active) e um standby através de prioridades configuráveis. HSRP envia hellos multicast a cada 3 segundos por padrão.",
        "nivel": "base"
    },
    {
        "id": 7,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Durante troubleshooting de problemas de conectividade intermitente, você suspeita de um loop de Camada 2. Qual protocolo previne loops em redes switched?",
        "alternativas": [
            "VTP (VLAN Trunking Protocol)",
            "STP (Spanning Tree Protocol)",
            "DTP (Dynamic Trunking Protocol)",
            "CDP (Cisco Discovery Protocol)"
        ],
        "respostaCorreta": 1,
        "explicacao": "STP (Spanning Tree Protocol - IEEE 802.1D) previne loops de Camada 2 em redes com switches redundantes, bloqueando portas redundantes para criar uma topologia livre de loops. O protocolo elege uma Bridge Root baseada no menor Bridge ID, depois calcula os melhores caminhos. Estados de porta STP incluem: Blocking, Listening, Learning, Forwarding e Disabled. Variantes modernas como RSTP (802.1w) convergem mais rapidamente (~1-2 segundos vs 30-50 segundos). Loops de Camada 2 causam broadcast storms que podem derrubar uma rede completamente.",
        "nivel": "base"
    },
    {
        "id": 8,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual tecnologia permite que um switch encaminhe frames baseando-se no endereço IP de destino, funcionando como um roteador?",
        "alternativas": [
            "VLAN Tagging (802.1Q)",
            "Port Security",
            "Switch Layer 3 com IP Routing habilitado",
            "EtherChannel com LACP"
        ],
        "respostaCorreta": 2,
        "explicacao": "Um Switch Layer 3 (Multilayer Switch) combina funcionalidades de switching (Camada 2) com roteamento (Camada 3). Quando o IP Routing é habilitado, o switch pode tomar decisões de encaminhamento baseadas em endereços IP, mantendo tabelas de roteamento e realizando roteamento inter-VLAN em hardware (ASIC), oferecendo performance muito superior a roteadores tradicionais. SVIs (Switched Virtual Interfaces) são criadas para cada VLAN, permitindo roteamento. É a solução ideal para redes corporativas que precisam de roteamento de alta velocidade entre VLANs.",
        "nivel": "base"
    },
    {
        "id": 9,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em uma captura de tráfego, você identifica pacotes ARP com opcode 1. O que esses pacotes representam?",
        "alternativas": [
            "ARP Reply - Resposta de resolução de endereço",
            "ARP Request - Solicitação de resolução de endereço",
            "Gratuitous ARP - Anúncio não solicitado",
            "Reverse ARP - Resolução reversa"
        ],
        "respostaCorreta": 1,
        "explicacao": "ARP (Address Resolution Protocol) opera na Camada 2 do modelo OSI para resolver endereços IP em endereços MAC. O campo opcode no cabeçalho ARP indica o tipo de mensagem: opcode 1 = ARP Request (broadcast perguntando 'quem tem este IP?'), opcode 2 = ARP Reply (unicast respondendo com o MAC). ARP Requests são enviados como broadcast Ethernet (FF:FF:FF:FF:FF:FF). Gratuitous ARP é um ARP Request onde IP origem e destino são iguais, usado para detectar conflitos de IP e atualizar caches ARP. ARP é vulnerável a ataques de spoofing e poisoning.",
        "nivel": "base"
    },
    {
        "id": 10,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual é o papel do campo 'Fragment Offset' no cabeçalho IPv4?",
        "alternativas": [
            "Indica a prioridade do pacote na fila de transmissão",
            "Especifica a posição do fragmento dentro do datagrama original",
            "Define o tempo máximo de vida do pacote",
            "Identifica o protocolo da camada superior"
        ],
        "respostaCorreta": 1,
        "explicacao": "O campo Fragment Offset (13 bits) no cabeçalho IPv4 indica a posição relativa de um fragmento no datagrama original, medido em unidades de 8 bytes. Quando um datagrama IP excede o MTU (Maximum Transmission Unit) da rede, ele é fragmentado. O Fragment Offset permite que o destinatário reordene os fragmentos corretamente. Por exemplo, se um pacote de 3000 bytes é fragmentado com MTU 1500, o primeiro fragmento tem offset 0, o segundo offset 1480/8=185. Flags associadas incluem DF (Don't Fragment) e MF (More Fragments). Path MTU Discovery usa DF para evitar fragmentação.",
        "nivel": "base"
    },
    {
        "id": 11,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em uma rede usando NAT (Network Address Translation), qual tipo de NAT permite que múltiplos hosts internos compartilhem um único endereço IP público usando portas diferentes?",
        "alternativas": [
            "Static NAT (one-to-one)",
            "Dynamic NAT (pool-based)",
            "PAT - Port Address Translation (NAT Overload)",
            "NAT64 (IPv6 to IPv4)"
        ],
        "respostaCorreta": 2,
        "explicacao": "PAT (Port Address Translation), também conhecido como NAT Overload, permite que múltiplos dispositivos internos compartilhem um único IP público diferenciando conexões através das portas de origem. O roteador NAT mantém uma tabela de tradução mapeando [IP privado:porta origem] para [IP público:porta traduzida]. Por exemplo, 192.168.1.10:5000 e 192.168.1.20:5000 podem ser traduzidos para 200.1.1.1:50000 e 200.1.1.1:50001. PAT é o tipo mais comum de NAT usado em residências e pequenas empresas. Static NAT mapeia 1:1, Dynamic NAT usa um pool mas sem compartilhamento de IPs.",
        "nivel": "base"
    },
    {
        "id": 12,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual protocolo da camada de aplicação usa tanto TCP quanto UDP, tipicamente nas portas 53, para resolução de nomes de domínio?",
        "alternativas": [
            "DHCP - Dynamic Host Configuration Protocol",
            "DNS - Domain Name System",
            "NTP - Network Time Protocol",
            "SNMP - Simple Network Management Protocol"
        ],
        "respostaCorreta": 1,
        "explicacao": "DNS (Domain Name System) usa primariamente UDP porta 53 para consultas normais devido à baixa latência e overhead reduzido. Entretanto, DNS também usa TCP porta 53 em situações específicas: respostas maiores que 512 bytes (antes do EDNS0), transferências de zona (AXFR/IXFR) entre servidores DNS, e quando a flag TC (Truncated) está setada. Com DNSSEC e IPv6, respostas maiores são comuns. DNS opera com registros como A (IPv4), AAAA (IPv6), MX (mail), CNAME (alias), NS (nameserver) e TXT. A hierarquia DNS começa nos root servers (.), seguindo para TLDs (.com, .org) e domínios autoritativos.",
        "nivel": "base"
    },
    {
        "id": 13,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em QoS (Quality of Service), qual campo do cabeçalho IPv4 é usado para marcar e classificar pacotes para tratamento prioritário?",
        "alternativas": [
            "Protocol Field",
            "ToS/DSCP (Type of Service / Differentiated Services Code Point)",
            "Header Checksum",
            "Identification Field"
        ],
        "respostaCorreta": 1,
        "explicacao": "O campo ToS (Type of Service), redefinido como campo DSCP (Differentiated Services Code Point) nos primeiros 6 bits, é usado para classificação QoS. DSCP permite 64 valores (0-63) para priorização de tráfego. Valores comuns incluem: EF (Expedited Forwarding, 46) para voz, AF (Assured Forwarding) classes para dados críticos, e Best Effort (0) para tráfego comum. Os 2 bits ECN (Explicit Congestion Notification) completam o byte. QoS é essencial em redes convergentes para garantir performance de aplicações sensíveis a latência e jitter como VoIP e vídeoconferência. Ferramentas como Class-Based Weighted Fair Queuing (CBWFQ) usam DSCP.",
        "nivel": "base"
    },
    {
        "id": 14,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual mecanismo de segurança em switches pode limitar o número de endereços MAC aprendidos em uma porta e tomar ações quando violado?",
        "alternativas": [
            "BPDU Guard",
            "Root Guard",
            "Port Security",
            "Storm Control"
        ],
        "respostaCorreta": 2,
        "explicacao": "Port Security é um recurso de segurança em switches que restringe o acesso por porta limitando endereços MAC. Você pode configurar: número máximo de MACs (default 1), MACs estáticos permitidos, ou aging de MACs dinâmicos. Ações de violação incluem: Shutdown (desabilita a porta - default), Restrict (descarta pacotes e incrementa contador), ou Protect (apenas descarta pacotes). Port Security previne ataques como MAC flooding e acesso não autorizado. Comando Cisco típico: 'switchport port-security maximum 2' e 'switchport port-security violation shutdown'. É fundamental para conformidade com padrões de segurança como PCI-DSS.",
        "nivel": "base"
    },
    {
        "id": 15,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em IPv6, qual tipo de endereço é automaticamente configurado usando o prefixo da rede e o endereço MAC (EUI-64)?",
        "alternativas": [
            "Link-Local (fe80::/10)",
            "Unique Local (fc00::/7)",
            "Global Unicast com SLAAC",
            "Multicast (ff00::/8)"
        ],
        "respostaCorreta": 2,
        "explicacao": "SLAAC (Stateless Address Autoconfiguration) permite que hosts IPv6 configurem automaticamente endereços Global Unicast usando Router Advertisements (RA). O host combina o prefixo de 64 bits anunciado pelo roteador com um Interface ID de 64 bits derivado do MAC usando EUI-64 (insere FF:FE no meio do MAC e inverte o 7º bit). Por exemplo, MAC 00:0C:29:1A:2B:3C se torna Interface ID 020C:29FF:FE1A:2B3C. Link-Local (fe80::/10) também usa EUI-64 mas é gerado automaticamente sem RA. SLAAC elimina necessidade de DHCPv6 para atribuição básica de endereço, simplificando configuração de rede.",
        "nivel": "base"
    },
    {
        "id": 16,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual protocolo é usado para descobrir e mapear a topologia de rede entre dispositivos Cisco, operando na Camada 2?",
        "alternativas": [
            "LLDP (Link Layer Discovery Protocol)",
            "CDP (Cisco Discovery Protocol)",
            "OSPF (Open Shortest Path First)",
            "ARP (Address Resolution Protocol)"
        ],
        "respostaCorreta": 1,
        "explicacao": "CDP (Cisco Discovery Protocol) é um protocolo proprietário Cisco de Camada 2 usado para descobrir vizinhos diretamente conectados. CDP envia anúncios multicast periodicamente (60 segundos default) para o endereço 01:00:0C:CC:CC:CC. Informações compartilhadas incluem: device ID, platform, capabilities, interfaces, IOS version e VTP domain. CDP é útil para documentação de rede e troubleshooting, mas deve ser desabilitado em portas voltadas para usuários por questões de segurança (information disclosure). LLDP (802.1AB) é o equivalente padrão aberto. Comandos: 'show cdp neighbors detail' revela informações da topologia.",
        "nivel": "base"
    },
    {
        "id": 17,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em um ambiente de data center, qual tecnologia permite agregação de largura de banda combinando múltiplas interfaces físicas em uma interface lógica?",
        "alternativas": [
            "VLAN Trunking",
            "EtherChannel (Link Aggregation)",
            "Port Mirroring (SPAN)",
            "VTP Pruning"
        ],
        "respostaCorreta": 1,
        "explicacao": "EtherChannel (também conhecido como Link Aggregation ou Port-Channel) permite combinar até 8 interfaces físicas em uma interface lógica única, aumentando largura de banda e redundância. Protocolos de negociação incluem: LACP (Link Aggregation Control Protocol - IEEE 802.3ad, padrão aberto) e PAgP (Port Aggregation Protocol - Cisco proprietário). EtherChannel distribui tráfego usando algoritmos de load-balancing baseados em src/dst MAC, IP ou porta. Todas as interfaces devem ter configurações idênticas (speed, duplex, VLANs). Benefícios incluem: utilização de banda agregada, failover rápido, e STP trata o bundle como link único.",
        "nivel": "base"
    },
    {
        "id": 18,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual protocolo da camada de transporte oferece controle de fluxo, controle de congestionamento e entrega confiável através de acknowledgments?",
        "alternativas": [
            "UDP (User Datagram Protocol)",
            "ICMP (Internet Control Message Protocol)",
            "TCP (Transmission Control Protocol)",
            "IGMP (Internet Group Management Protocol)"
        ],
        "respostaCorreta": 2,
        "explicacao": "TCP (Transmission Control Protocol - RFC 793) é um protocolo orientado a conexão que garante entrega confiável e ordenada. Características principais: three-way handshake (SYN, SYN-ACK, ACK) para estabelecer conexão, sequence numbers para ordenação, acknowledgments (ACK) para confirmação de recebimento, sliding window para controle de fluxo, e algoritmos de congestion control (Slow Start, Congestion Avoidance, Fast Retransmit/Recovery). TCP usa checksum para detecção de erros e retransmite segmentos perdidos. Aplicações como HTTP, HTTPS, FTP, SSH e SMTP usam TCP. Em contraste, UDP é connectionless e best-effort, adequado para streaming e DNS.",
        "nivel": "base"
    },
    {
        "id": 19,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em um ataque de Man-in-the-Middle na camada 2, o atacante envia gratuitous ARP replies falsas. Qual técnica de defesa específica pode mitigar esse ataque?",
        "alternativas": [
            "Implementar VLANs privadas (PVLANs)",
            "Ativar Dynamic ARP Inspection (DAI)",
            "Configurar Port Security com sticky MAC",
            "Habilitar BPDU Guard nas portas"
        ],
        "respostaCorreta": 1,
        "explicacao": "Dynamic ARP Inspection (DAI) é uma feature de segurança que valida pacotes ARP contra uma binding table (construída via DHCP Snooping ou configuração estática) antes de encaminhá-los. DAI intercepta todos os ARP requests e replies, descartando pacotes com mapeamentos IP-to-MAC inválidos. Isso previne ARP poisoning/spoofing onde atacantes enviam ARP falsas para interceptar tráfego (MITM). DAI deve ser configurado em conjunto com DHCP Snooping e funciona apenas em VLANs configuradas. Portas confiáveis (uplinks, servidor DHCP) são isentas de inspeção. DAI incrementa a segurança da Camada 2, essencial em ambientes corporativos.",
        "nivel": "base"
    },
    {
        "id": 20,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual é a principal diferença entre um hub e um switch na camada de enlace de dados?",
        "alternativas": [
            "Hub opera em Camada 1 (física) e flooding, switch opera em Camada 2 e usa MAC table",
            "Hub suporta VLANs, switch não suporta",
            "Hub usa roteamento IP, switch usa apenas bridging",
            "Não há diferença funcional, apenas nomenclatura"
        ],
        "respostaCorreta": 0,
        "explicacao": "Hubs são dispositivos de Camada 1 que apenas repetem sinais elétricos em todas as portas (flooding), criando um único domínio de colisão compartilhado por todos os dispositivos. Switches são dispositivos de Camada 2 que aprendem endereços MAC e constroem uma MAC Address Table (CAM table), encaminhando frames apenas para a porta de destino apropriada. Cada porta do switch é um domínio de colisão separado, permitindo comunicação full-duplex e eliminando colisões. Switches também suportam VLANs, spanning-tree, port security e outras funcionalidades avançadas. Hubs são obsoletos em redes modernas devido à performance e segurança inferiores.",
        "nivel": "base"
    },
    {
        "id": 21,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em uma análise de performance, você identifica que a métrica 'jitter' está alta. Que tipo de aplicação seria mais afetada negativamente?",
        "alternativas": [
            "Transferência de arquivos via FTP",
            "Download de páginas web (HTTP)",
            "VoIP e videoconferência em tempo real",
            "Sincronização de e-mail (IMAP)"
        ],
        "respostaCorreta": 2,
        "explicacao": "Jitter é a variação no atraso (delay variation) entre pacotes recebidos. Aplicações de tempo real como VoIP e videoconferência são extremamente sensíveis a jitter pois necessitam de entrega constante e previsível para manter qualidade de áudio/vídeo. Alto jitter causa choppy audio, video freezing e perda de sincronização. Buffers de jitter são usados para suavizar variações, mas aumentam latência. Aplicações que toleram jitter incluem: FTP, HTTP, e-mail, pois usam TCP com retransmissão e não têm requisitos de tempo real. QoS com priorização (queuing, shaping) e provisioning adequado de banda são essenciais para controlar jitter. ITU-T G.114 recomenda jitter < 30ms para boa qualidade VoIP.",
        "nivel": "base"
    },
    {
        "id": 22,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual tipo de cabo de rede é recomendado para conectar dois switches diretamente sem usar um dispositivo intermediário?",
        "alternativas": [
            "Cabo straight-through (direto)",
            "Cabo crossover",
            "Cabo rollover (console)",
            "Cabo coaxial"
        ],
        "respostaCorreta": 1,
        "explicacao": "Cabo crossover cruza os pares de transmissão (TX) e recepção (RX) para permitir comunicação direta entre dispositivos similares: switch-to-switch, router-to-router, PC-to-PC. Em um cabo crossover, pinos 1-2 (TX) se conectam a pinos 3-6 (RX) do outro lado. Cabo straight-through é usado para conectar dispositivos diferentes (PC to switch, router to switch). Entretanto, equipamentos modernos com Auto-MDIX (Automatic Medium-Dependent Interface Crossover) detectam automaticamente o tipo de cabo e ajustam os pares, eliminando necessidade de crossover. Padrões de pinagem: T568A e T568B. Cabo rollover é usado para console serial, não para rede Ethernet.",
        "nivel": "base"
    },
    {
        "id": 23,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em uma rede wireless 802.11, qual modo de operação permite que dispositivos se comuniquem diretamente entre si sem um Access Point?",
        "alternativas": [
            "Infrastructure Mode",
            "Ad-Hoc Mode (IBSS - Independent Basic Service Set)",
            "Bridge Mode",
            "Repeater Mode"
        ],
        "respostaCorreta": 1,
        "explicacao": "Ad-Hoc Mode (também chamado IBSS - Independent Basic Service Set ou peer-to-peer mode) permite que dispositivos wireless se comuniquem diretamente sem necessidade de Access Point. Cada dispositivo funciona como ponto e cliente simultaneamente. Ad-Hoc é útil para redes temporárias, file sharing direto, e situações onde infraestrutura não está disponível. Limitações incluem: alcance reduzido, performance menor que infrastructure mode, e suporte limitado em dispositivos modernos. Infrastructure Mode (BSS - Basic Service Set) usa AP centralizado, sendo o padrão para redes corporativas e domésticas. Wi-Fi Direct é uma evolução do Ad-Hoc com melhor usabilidade e segurança.",
        "nivel": "base"
    },
    {
        "id": 24,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual tecnologia permite que um Access Point wireless suporte múltiplas SSIDs, cada uma em VLANs diferentes, melhorando segmentação de rede?",
        "alternativas": [
            "WPA3-Enterprise",
            "Multiple SSID com VLAN tagging (802.1Q)",
            "WPS (Wi-Fi Protected Setup)",
            "Channel bonding"
        ],
        "respostaCorreta": 1,
        "explicacao": "Multiple SSID (também chamado MBSSID - Multiple BSSID) permite que um Access Point transmita múltiplos nomes de rede (SSIDs), cada um mapeado para uma VLAN específica via 802.1Q tagging. Isso possibilita segmentação de rede wireless: SSID corporativo em VLAN 10 (acesso completo), SSID convidados em VLAN 20 (isolado), SSID IoT em VLAN 30 (restrito). Trunk 802.1Q entre AP e switch transporta múltiplas VLANs. Benefícios incluem: isolamento de tráfego, políticas de segurança diferenciadas por SSID, e melhor gerenciamento de recursos. Cada SSID pode ter autenticação e criptografia independentes. Máximo de SSIDs varia por fabricante, típicamente 8-16.",
        "nivel": "base"
    },
    {
        "id": 25,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em troubleshooting de conectividade, você executa 'traceroute' e recebe apenas asteriscos (*) após o terceiro hop. O que isso provavelmente indica?",
        "alternativas": [
            "O destino foi alcançado com sucesso",
            "Um firewall ou roteador está bloqueando ICMP Time Exceeded messages",
            "A rede de destino não existe",
            "O TTL inicial está configurado incorretamente"
        ],
        "respostaCorreta": 1,
        "explicacao": "Traceroute funciona enviando pacotes com TTL incrementalmente (1, 2, 3...) e esperando mensagens ICMP Time Exceeded de cada hop. Asteriscos (*) indicam timeout - nenhuma resposta ICMP foi recebida dentro do período esperado. Causas comuns: firewall bloqueando ICMP Type 11 (Time Exceeded), roteadores configurados para não responder ICMP por segurança, ou congestionamento de rede causando perda de pacotes. Traceroute no Windows usa ICMP Echo Request, no Linux/Unix usa UDP por padrão. Alternativas: usar tcptraceroute (TCP SYN), MTR (combina traceroute e ping), ou traceroute com diferentes protocolos. Alguns ISPs bloqueiam ICMP por políticas de segurança.",
        "nivel": "base"
    },
    {
        "id": 26,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual campo do cabeçalho TCP é usado para implementar controle de fluxo através do mecanismo de sliding window?",
        "alternativas": [
            "Sequence Number",
            "Acknowledgment Number",
            "Window Size",
            "Urgent Pointer"
        ],
        "respostaCorreta": 2,
        "explicacao": "O campo Window Size (16 bits) no cabeçalho TCP especifica quantos bytes o receptor está disposto a aceitar antes de exigir acknowledgment. Isso implementa flow control através do sliding window mechanism. Por exemplo, se Window Size = 65535, o sender pode enviar até 65KB antes de esperar ACK. Window Scaling (RFC 1323) permite janelas maiores multiplicando o valor por fator de escala (até 1GB). Zero Window indica que o buffer do receptor está cheio, pausando transmissão. TCP ajusta dinamicamente o window size baseado em condições de rede. Sequence Number e ACK number rastreiam bytes enviados/recebidos. Este mecanismo previne overflow do receptor e otimiza throughput.",
        "nivel": "base"
    },
    {
        "id": 27,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em segurança de rede, qual ataque explora o processo de three-way handshake do TCP enviando múltiplos SYN packets sem completar a conexão?",
        "alternativas": [
            "ARP Spoofing Attack",
            "DNS Amplification Attack",
            "SYN Flood Attack (TCP SYN DDoS)",
            "ICMP Flood Attack"
        ],
        "respostaCorreta": 2,
        "explicacao": "SYN Flood é um ataque DDoS (Distributed Denial of Service) de Camada 4 que explora o TCP three-way handshake. O atacante envia grande quantidade de SYN packets com IP de origem falsificado (spoofed), consumindo recursos do servidor que mantém conexões half-open (estado SYN-RECEIVED) aguardando ACK final que nunca chega. Isso esgota a backlog queue do servidor, impedindo conexões legítimas. Mitigações incluem: SYN cookies (evita manter estado até ACK), rate limiting, aumentar backlog queue, firewalls com SYN proxy, e sistemas IPS. TCP backlog padrão é pequeno (128-1024), vulnerável a ataques. SYN Flood foi usado em ataques famosos como Mirai botnet.",
        "nivel": "base"
    },
    {
        "id": 28,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual protocolo permite que hosts em uma rede IPv6 descubram roteadores e configurem endereços automaticamente sem servidor DHCP?",
        "alternativas": [
            "ICMPv6 com Router Advertisement (RA) e Router Solicitation (RS)",
            "DHCPv6 stateful",
            "ARP sobre IPv6",
            "HSRP versão 3"
        ],
        "respostaCorreta": 0,
        "explicacao": "ICMPv6 Neighbor Discovery Protocol (NDP) usa mensagens Router Advertisement (RA) e Router Solicitation (RS) para autoconfiguração. Roteadores enviam RAs periodicamente (multicast ff02::1 - all nodes) ou em resposta a RS, anunciando prefixo de rede, default gateway, MTU e flags de configuração (M=managed, O=other). Hosts usam SLAAC (Stateless Address Autoconfiguration) para gerar endereço combinando prefixo do RA com Interface ID (EUI-64 ou random). NDP também substitui ARP através de Neighbor Solicitation (NS) e Neighbor Advertisement (NA) para resolução de endereço. Flags do RA determinam se DHCPv6 é necessário: M=1 para stateful DHCPv6, O=1 para informações adicionais (DNS via DHCPv6).",
        "nivel": "base"
    },
    {
        "id": 29,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em um ambiente com múltiplos ISPs, qual protocolo de roteamento é usado para trocar informações de roteamento entre Autonomous Systems (AS)?",
        "alternativas": [
            "OSPF (Open Shortest Path First)",
            "EIGRP (Enhanced Interior Gateway Routing Protocol)",
            "BGP (Border Gateway Protocol)",
            "RIPv2 (Routing Information Protocol version 2)"
        ],
        "respostaCorreta": 2,
        "explicacao": "BGP (Border Gateway Protocol - RFC 4271) é o protocolo de roteamento exterior (EGP - Exterior Gateway Protocol) usado para trocar informações entre Autonomous Systems diferentes. BGP é o protocolo que sustenta a Internet global, conectando ISPs e grandes organizações. BGP usa TCP porta 179 para confiabilidade e troca caminhos (AS paths) ao invés de métricas simples. Decisões de roteamento BGP consideram: AS path length, local preference, origin, MED, e políticas de routing. iBGP (Internal BGP) roda dentro de um AS, eBGP (External BGP) entre ASs. BGP é path-vector protocol, prevenindo loops através de AS path. Configuração BGP requer número AS (públicos: 1-64511, privados: 64512-65535).",
        "nivel": "base"
    },
    {
        "id": 30,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual tecnologia de WAN oferece conexão dedicada ponto-a-ponto entre dois locais, garantindo largura de banda e baixa latência?",
        "alternativas": [
            "MPLS (Multiprotocol Label Switching)",
            "VPN over Internet",
            "Leased Line / Dedicated Circuit (ex: E1/T1, Metro Ethernet)",
            "DSL (Digital Subscriber Line)"
        ],
        "respostaCorreta": 2,
        "explicacao": "Leased Lines são circuitos dedicados ponto-a-ponto fornecidos por carriers de telecomunicações, oferecendo largura de banda garantida, latência baixa e consistente, e disponibilidade alta (SLA típico 99.9%+). Exemplos incluem: T1 (1.544 Mbps), E1 (2.048 Mbps), T3/E3, e Metro Ethernet (1Gbps-10Gbps). Vantagens: banda simétrica dedicada, segurança (circuito privado), QoS garantido, ideal para aplicações críticas. Desvantagens: custo alto, longo lead time de instalação. MPLS oferece rede privada mas compartilhada. VPN sobre Internet é mais barata mas usa infraestrutura compartilhada. DSL é assimétrica e compartilhada. Leased Lines são usadas por bancos, hospitais e data centers que necessitam conectividade mission-critical.",
        "nivel": "base"
    },
    {
        "id": 31,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em análise de performance de rede, qual ferramenta seria mais apropriada para medir throughput e latência entre dois pontos finais?",
        "alternativas": [
            "Wireshark (packet capture)",
            "iperf/iperf3 (network performance testing)",
            "nmap (network scanner)",
            "netstat (network statistics)"
        ],
        "respostaCorreta": 1,
        "explicacao": "iperf/iperf3 são ferramentas de linha de comando projetadas especificamente para medir performance de rede (throughput, jitter, packet loss) entre cliente e servidor. iperf opera em Camada 4, testando TCP e UDP. Uso típico: servidor executa 'iperf3 -s', cliente executa 'iperf3 -c <server_IP>'. Métricas reportadas incluem: bandwidth (Mbps/Gbps), retransmissões TCP, jitter (para UDP), e packet loss. Parâmetros configuráveis: duração do teste, tamanho da janela TCP, número de streams paralelos. iperf é essencial para baseline de rede, troubleshooting de performance, e validação de QoS. Wireshark captura pacotes mas não gera tráfego. nmap faz port scanning. netstat mostra conexões ativas.",
        "nivel": "base"
    },
    {
        "id": 32,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual ataque de rede explora a falta de autenticação no protocolo DHCP para fornecer informações maliciosas a clientes?",
        "alternativas": [
            "DNS Cache Poisoning",
            "DHCP Starvation",
            "Rogue DHCP Server Attack",
            "VLAN Hopping"
        ],
        "respostaCorreta": 2,
        "explicacao": "Rogue DHCP Server Attack ocorre quando um atacante instala um servidor DHCP não autorizado na rede, respondendo a DHCP Discover messages antes do servidor legítimo. O atacante pode fornecer: gateway padrão malicioso (man-in-the-middle), servidor DNS falso (phishing/malware), IP address com máscara incorreta (DoS), ou endereço IP conflitante. Clientes aceitam a primeira oferta DHCP recebida. Mitigação: DHCP Snooping (feature de switch que valida mensagens DHCP e constrói binding table, marcando portas como trusted/untrusted). Portas untrusted só podem enviar DHCP Requests, não Offers. DHCP Snooping também previne DHCP Starvation (exaurir pool DHCP com requests falsos). É defesa essencial de Camada 2.",
        "nivel": "base"
    },
    {
        "id": 33,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em switches Cisco, qual comando exibe a tabela MAC address e as portas associadas?",
        "alternativas": [
            "show ip route",
            "show mac address-table",
            "show vlan brief",
            "show interface status"
        ],
        "respostaCorreta": 1,
        "explicacao": "O comando 'show mac address-table' (ou 'show mac-address-table' dependendo da versão IOS) exibe a CAM (Content Addressable Memory) table que mapeia endereços MAC a portas do switch e VLANs. Output inclui: VLAN ID, MAC address, tipo (dynamic/static), e porta. MACs dinâmicos são aprendidos de tráfego e envelhecem (default 300 segundos de inatividade). MACs estáticos são configurados manualmente e não envelhecem. A CAM table é consultada em hardware (ASIC) para forwarding de alta velocidade. 'show mac address-table dynamic' filtra apenas entradas aprendidas. Comando relacionado: 'clear mac address-table dynamic' limpa entradas aprendidas. CAM table size varia por modelo (4K-128K+ entradas).",
        "nivel": "base"
    },
    {
        "id": 34,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual tipo de endereço IPv6 é equivalente ao endereço de loopback 127.0.0.1 do IPv4?",
        "alternativas": [
            "::1",
            "fe80::1",
            "ff02::1",
            "2001:db8::1"
        ],
        "respostaCorreta": 0,
        "explicacao": "O endereço de loopback IPv6 é ::1 (ou 0000:0000:0000:0000:0000:0000:0000:0001 expandido), equivalente ao 127.0.0.1 do IPv4. Tráfego enviado para ::1 nunca deixa o host, usado para testes locais e comunicação inter-processos. A notação :: representa compressão de zeros consecutivos. fe80:: são endereços Link-Local (escopo local da rede física). ff02::1 é multicast all-nodes (todos os dispositivos no segmento local). 2001:db8::/32 é prefixo reservado para documentação (não roteável). Outros endereços especiais IPv6: ::/128 unspecified address, ::/0 default route, ::ffff:0:0/96 IPv4-mapped IPv6 addresses. Interface loopback (lo0) sempre responde a ::1 e 127.0.0.1.",
        "nivel": "base"
    },
    {
        "id": 35,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em redes wireless 802.11, qual método de segurança oferece autenticação por usuário através de servidor RADIUS?",
        "alternativas": [
            "WPA3-Personal (SAE)",
            "WPA2-Enterprise (802.1X)",
            "WEP (Wired Equivalent Privacy)",
            "MAC Address Filtering"
        ],
        "respostaCorreta": 1,
        "explicacao": "WPA2-Enterprise (também chamado WPA2-802.1X ou WPA2-EAP) usa autenticação centralizada através de servidor RADIUS (Remote Authentication Dial-In User Service). Cada usuário tem credenciais únicas (username/password ou certificado digital), ao contrário de WPA2-Personal que usa PSK (Pre-Shared Key) compartilhada. Fluxo: cliente → authenticator (AP) → authentication server (RADIUS). Métodos EAP incluem: EAP-TLS (certificados), PEAP-MSCHAPv2 (username/password), EAP-TTLS. WPA2-Enterprise oferece: auditoria por usuário, revogação individual, integração com Active Directory/LDAP, chaves de criptografia dinâmicas. Essencial para ambientes corporativos e conformidade (HIPAA, PCI-DSS). WPA3-Enterprise adiciona 192-bit security suite.",
        "nivel": "base"
    },
    {
        "id": 36,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual técnica permite que um servidor web responda a requisições em múltiplos endereços IP mas todos na mesma interface física?",
        "alternativas": [
            "NAT (Network Address Translation)",
            "Secondary IP Address / IP Aliasing",
            "Proxy ARP",
            "DHCP Relay"
        ],
        "respostaCorreta": 1,
        "explicacao": "Secondary IP Address (Linux: IP aliasing) permite configurar múltiplos endereços IP na mesma interface física. No Linux, usa-se 'ip addr add <IP>/<mask> dev <interface>' ou aliases (eth0:0, eth0:1). No Windows, Additional IP addresses via propriedades do adaptador. Casos de uso: hospedar múltiplos serviços web com IPs dedicados, migração de rede gradual, alta disponibilidade com VRRP/HSRP. Cada IP secundário responde a ARP independentemente. Difere de VLANs sub-interfaces (eth0.10) que segmentam Camada 2. Difere de virtual IPs (VIPs) usados por load balancers. Técnica simples mas efetiva para multi-homing de serviços sem hardware adicional.",
        "nivel": "base"
    },
    {
        "id": 37,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em análise forense de rede, você identifica tráfego UDP na porta 69. Qual protocolo provavelmente está sendo usado?",
        "alternativas": [
            "SNMP (Simple Network Management Protocol)",
            "TFTP (Trivial File Transfer Protocol)",
            "NTP (Network Time Protocol)",
            "DNS (Domain Name System)"
        ],
        "respostaCorreta": 1,
        "explicacao": "TFTP (Trivial File Transfer Protocol - RFC 1350) usa UDP porta 69 para transferência simples de arquivos, comumente para boot de dispositivos de rede, backup/restauração de configurações de switches/roteadores, e carregamento de imagens IOS. TFTP é extremamente simples: sem autenticação, sem listagem de diretório, sem criptografia. Opera com mecanismo de lock-step (acknowledgment para cada bloco). Devido à falta de segurança, TFTP deve ser usado apenas em redes confiáveis e preferencialmente desabilitado quando não necessário. SNMP usa UDP 161/162, NTP usa UDP 123, DNS usa UDP/TCP 53. TFTP é substituído por protocolos mais seguros como SCP/SFTP em ambientes modernos, mas ainda comum em firmware de dispositivos embarcados.",
        "nivel": "base"
    },
    {
        "id": 38,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual protocolo multicast permite que hosts informem roteadores sobre interesse em receber tráfego de grupos multicast específicos?",
        "alternativas": [
            "ICMP (Internet Control Message Protocol)",
            "IGMP (Internet Group Management Protocol)",
            "PIM (Protocol Independent Multicast)",
            "RSVP (Resource Reservation Protocol)"
        ],
        "respostaCorreta": 1,
        "explicacao": "IGMP (Internet Group Management Protocol - RFC 3376) opera entre hosts e roteadores multicast para gerenciar membership de grupos. IGMPv2 usa: Membership Query (roteador pergunta quem está interessado), Membership Report (host responde com grupos desejados), Leave Group (host sai). IGMPv3 adiciona source-specific multicast (SSM). Endereços multicast IPv4: 224.0.0.0/4. Exemplos: 224.0.0.1 (all hosts), 224.0.0.2 (all routers), 239.0.0.0/8 (administratively scoped). IGMP Snooping em switches escuta IGMP messages para encaminhar tráfego multicast apenas para portas interessadas, evitando flooding. PIM (Dense/Sparse mode) é usado entre roteadores para distribuição multicast. Aplicações: IPTV, videoconferência, distribuição de software.",
        "nivel": "base"
    },
    {
        "id": 39,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Em troubleshooting, você precisa verificar se uma porta TCP está aberta em um servidor remoto. Qual ferramenta seria mais apropriada?",
        "alternativas": [
            "ping (ICMP echo)",
            "traceroute / tracert",
            "telnet <host> <port> ou nc (netcat)",
            "arp -a"
        ],
        "respostaCorreta": 2,
        "explicacao": "Telnet pode ser usado para testar conectividade TCP em portas específicas: 'telnet <hostname> <port>'. Se a porta está aberta, conexão é estabelecida (blank screen ou banner). Se fechada/filtrada, connection refused ou timeout. Netcat (nc) é ferramenta mais moderna: 'nc -zv <host> <port>' (-z zero-I/O mode, -v verbose). Netcat suporta UDP testing com flag -u. nmap é ferramenta completa de port scanning: 'nmap -p <port> <host>'. ping testa apenas ICMP reachability, não portas TCP. telnet não deve ser usado para acesso remoto (inseguro), mas é útil para troubleshooting. PowerShell alternativa: Test-NetConnection -ComputerName <host> -Port <port>. Essas técnicas são fundamentais para diagnóstico de firewall e serviços.",
        "nivel": "base"
    },
    {
        "id": 40,
        "categoria": "redes",
        "tipo": "multipla",
        "enunciado": "Qual métrica o protocolo RIP (Routing Information Protocol) utiliza para determinar o melhor caminho?",
        "alternativas": [
            "Bandwidth (largura de banda)",
            "Hop Count (número de roteadores)",
            "Delay e Load combinados",
            "Cost baseado em Dijkstra"
        ],
        "respostaCorreta": 1,
        "explicacao": "RIP (Routing Information Protocol - RFC 2453 para RIPv2) é um protocolo distance-vector que usa Hop Count como única métrica. Cada roteador conta como 1 hop. RIP tem limite máximo de 15 hops (16 = infinity/unreachable), tornando-o inadequado para redes grandes. RIP envia updates periódicos (30 segundos) via broadcast (RIPv1) ou multicast 224.0.0.9 (RIPv2) na porta UDP 520. Convergência lenta e suscetível a loops (usa split horizon, poison reverse, hold-down timers). RIPng é versão para IPv6. RIP é considerado obsoleto, substituído por OSPF e EIGRP que consideram bandwidth, delay e outras métricas. OSPF usa cost baseado em bandwidth. EIGRP usa composite metric (bandwidth, delay, reliability, load).",
        "nivel": "base"
    },
    {
        "id": 41,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "No modelo OSI, em qual camada opera o protocolo TCP, responsável pela entrega confiável de segmentos?",
        "alternativas": [
            "Camada 3 - Rede (Network)",
            "Camada 4 - Transporte (Transport)",
            "Camada 5 - Sessão (Session)",
            "Camada 7 - Aplicação (Application)"
        ],
        "respostaCorreta": 1,
        "explicacao": "TCP (Transmission Control Protocol) opera na Camada 4 - Transporte do modelo OSI. A camada de transporte é responsável por: segmentação de dados, controle de fluxo, controle de erro end-to-end, e multiplexação usando port numbers. TCP oferece serviço orientado a conexão, confiável e ordenado. Camada 3 (IP) lida com endereçamento lógico e roteamento. Camada 5 (sessão) gerencia diálogos entre aplicações. Camada 7 (aplicação) fornece serviços de rede para aplicações. O modelo OSI de 7 camadas é framework conceitual; o TCP/IP model prático tem 4 camadas (Link, Internet, Transport, Application). Entender a separação de responsabilidades por camada é fundamental para troubleshooting e design de redes.",
        "nivel": "base"
    },
    {
        "id": 42,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo da camada de aplicação permite transferência segura de arquivos com autenticação e criptografia, substituindo o FTP tradicional?",
        "alternativas": [
            "TFTP (Trivial File Transfer Protocol)",
            "SFTP (SSH File Transfer Protocol)",
            "HTTP (Hypertext Transfer Protocol)",
            "Telnet"
        ],
        "respostaCorreta": 1,
        "explicacao": "SFTP (SSH File Transfer Protocol) opera sobre SSH (Secure Shell) na porta TCP 22, fornecendo transferência segura de arquivos com autenticação forte e criptografia end-to-end. SFTP não é FTP sobre SSH; é protocolo completamente diferente. Vantagens sobre FTP: credenciais criptografadas, dados criptografados, autenticação por chaves públicas, integridade de dados. SCP (Secure Copy) é alternativa mais simples também sobre SSH. FTPS (FTP Secure) usa TLS mas é diferente de SFTP. TFTP não tem segurança. O FTP tradicional (portas 21 comando, 20 dados) transmite credenciais em clear text, sendo inadequado para ambientes seguros. SFTP é padrão para transferências corporativas e conformidade (PCI-DSS, HIPAA).",
        "nivel": "base"
    },
    {
        "id": 43,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em uma requisição HTTP, qual método é considerado idempotente e é usado para solicitar dados do servidor sem modificá-los?",
        "alternativas": [
            "POST",
            "GET",
            "PUT",
            "DELETE"
        ],
        "respostaCorreta": 1,
        "explicacao": "O método GET é usado para solicitar dados de um recurso específico e é considerado idempotente (múltiplas requisições idênticas produzem o mesmo resultado) e seguro (não altera estado do servidor). GET passa parâmetros na URL (query string). POST envia dados no body para criar recursos (não idempotente). PUT atualiza recursos (idempotente). DELETE remove recursos (idempotente). PATCH atualiza parcialmente. HEAD é como GET mas retorna apenas headers. OPTIONS descreve métodos disponíveis. Princípios REST recomendam GET para leitura, POST para criação, PUT/PATCH para atualização, DELETE para remoção. GET requests podem ser cacheadas por proxies e browsers. Dados sensíveis não devem ir em GET (visíveis em logs e histórico).",
        "nivel": "base"
    },
    {
        "id": 44,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual código de status HTTP indica que o recurso foi movido permanentemente para uma nova URL?",
        "alternativas": [
            "200 OK",
            "301 Moved Permanently",
            "404 Not Found",
            "500 Internal Server Error"
        ],
        "respostaCorreta": 1,
        "explicacao": "HTTP status codes são divididos em classes: 1xx (Informacional), 2xx (Sucesso), 3xx (Redirecionamento), 4xx (Erro do Cliente), 5xx (Erro do Servidor). 301 Moved Permanently indica redirecionamento permanente; browsers e search engines devem atualizar suas referências. O header Location fornece nova URL. 302 Found é redirecionamento temporário (método pode mudar). 307 Temporary Redirect preserva método. 200 OK = sucesso. 201 Created = recurso criado. 204 No Content = sucesso sem corpo. 304 Not Modified = cache válido. 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found. 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable. Entender status codes é essencial para debugging de APIs e web apps.",
        "nivel": "base"
    },
    {
        "id": 45,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo permite sincronização de relógios em rede com precisão de milissegundos, essencial para logs e autenticação?",
        "alternativas": [
            "SNMP (Simple Network Management Protocol)",
            "NTP (Network Time Protocol)",
            "ICMP (Internet Control Message Protocol)",
            "DHCP (Dynamic Host Configuration Protocol)"
        ],
        "respostaCorreta": 1,
        "explicacao": "NTP (Network Time Protocol - RFC 5905) sincroniza relógios de computadores através de redes com latência variável, alcançando precisão de milissegundos em WANs e microsegundos em LANs. NTP usa UDP porta 123 e algoritmo Marzullo para selecionar melhores fontes de tempo. Hierarquia de stratum: Stratum 0 (relógios atômicos, GPS), Stratum 1 (servidores conectados a Stratum 0), até Stratum 16 (unreachable). NTP é crítico para: timestamps de logs correlacionados, autenticação Kerberos (sensível a clock skew), certificados digitais (validação de validade), trading financeiro, e conformidade regulatória. SNTP (Simple NTP) é versão simplificada para clientes. Comando Linux: ntpq -p. Servidores públicos: pool.ntp.org.",
        "nivel": "base"
    },
    {
        "id": 46,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em SNMP, qual tipo de mensagem é enviada por um agente para o gerente de forma assíncrona, notificando sobre eventos importantes?",
        "alternativas": [
            "GET Request",
            "SET Request",
            "TRAP",
            "GET Response"
        ],
        "respostaCorreta": 2,
        "explicacao": "SNMP (Simple Network Management Protocol) usa modelo manager-agent. Tipos de mensagens: GET (manager solicita valor de OID), GET-NEXT (iteração através de MIB), SET (manager modifica valor), GET-RESPONSE (agent responde), e TRAP (agent envia notificação assíncrona de evento ao manager). TRAPs são unidirecionais, sem acknowledgment (SNMPv1), enquanto INFORMs (SNMPv2c+) requerem confirmação. TRAPs notificam: link down/up, high CPU, disk full, authentication failure. SNMPv1 usa community strings (public/private) em clear text. SNMPv3 adiciona autenticação (MD5/SHA) e criptografia (DES/AES). SNMP usa UDP 161 (agent) e 162 (traps). OIDs (Object Identifiers) definem estrutura MIB (Management Information Base). Comum para monitoramento via Zabbix, Nagios, PRTG.",
        "nivel": "base"
    },
    {
        "id": 47,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de e-mail é usado por clientes para recuperar mensagens de um servidor, permitindo acesso de múltiplos dispositivos com sincronização?",
        "alternativas": [
            "SMTP (Simple Mail Transfer Protocol)",
            "POP3 (Post Office Protocol version 3)",
            "IMAP (Internet Message Access Protocol)",
            "MIME (Multipurpose Internet Mail Extensions)"
        ],
        "respostaCorreta": 2,
        "explicacao": "IMAP (Internet Message Access Protocol - RFC 3501) permite acesso a e-mail mantendo mensagens no servidor, suportando: múltiplos dispositivos sincronizados, organização em pastas server-side, flags (read/unread), e busca server-side. IMAP usa TCP porta 143 (993 com TLS). POP3 (porta 110/995) baixa e-mails e opcionalmente deleta do servidor, sem sincronização entre dispositivos. SMTP (porta 25/587/465) é usado para envio de e-mails, não recepção. Fluxo completo: MUA (Mail User Agent) usa SMTP para enviar → MTA (Mail Transfer Agent) encaminha via SMTP → MDA (Mail Delivery Agent) entrega → MUA usa IMAP/POP3 para recuperar. MIME define encoding de attachments. IMAP4 é padrão moderno para e-mail corporativo e webmail.",
        "nivel": "base"
    },
    {
        "id": 48,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual porta TCP é padrão para conexões HTTPS, fornecendo comunicação web criptografada via TLS/SSL?",
        "alternativas": [
            "80",
            "443",
            "8080",
            "8443"
        ],
        "respostaCorreta": 1,
        "explicacao": "HTTPS (HTTP Secure) usa porta TCP 443 por padrão e encapsula HTTP sobre TLS/SSL para fornecer: criptografia de dados em trânsito, autenticação do servidor via certificados digitais, e integridade de mensagens. HTTP tradicional usa porta 80 sem criptografia. 8080 e 8443 são portas alternativas não-privilegiadas comuns para desenvolvimento. TLS handshake estabelece sessão: ClientHello → ServerHello + Certificate → Key Exchange → Finished. Certificados X.509 são emitidos por CAs (Certificate Authorities) ou auto-assinados. HTTPS é obrigatório para: e-commerce, login forms, e conformidade (PCI-DSS). Browsers modernos marcam HTTP como 'Not Secure'. HSTS (HTTP Strict Transport Security) força HTTPS. TLS 1.3 é versão mais recente, 1.2 é mínimo recomendado.",
        "nivel": "base"
    },
    {
        "id": 49,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em DNS, qual tipo de registro mapeia um nome de domínio para um endereço IPv6?",
        "alternativas": [
            "A Record",
            "AAAA Record",
            "CNAME Record",
            "MX Record"
        ],
        "respostaCorreta": 1,
        "explicacao": "DNS Record Types: A Record mapeia hostname para IPv4 (32-bit), AAAA Record (quad-A) mapeia para IPv6 (128-bit). CNAME (Canonical Name) cria alias apontando para outro hostname. MX (Mail Exchange) especifica servidores de e-mail com prioridade. NS (Name Server) delega zona para nameservers. TXT armazena texto arbitrário (SPF, DKIM, verificações). SOA (Start of Authority) define parâmetros da zona. PTR (Pointer) mapeia IP para hostname (reverse DNS). SRV (Service) localiza serviços. Exemplo query: 'dig example.com AAAA' retorna IPv6. Dual-stack hosts têm ambos A e AAAA records. Happy Eyeballs (RFC 8305) testa IPv6 e IPv4 simultaneamente para otimizar conectividade.",
        "nivel": "base"
    },
    {
        "id": 50,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo da camada de rede é usado para reportar erros e informações de controle, como 'Destination Unreachable' e 'Time Exceeded'?",
        "alternativas": [
            "TCP (Transmission Control Protocol)",
            "UDP (User Datagram Protocol)",
            "ICMP (Internet Control Message Protocol)",
            "ARP (Address Resolution Protocol)"
        ],
        "respostaCorreta": 2,
        "explicacao": "ICMP (Internet Control Message Protocol - RFC 792) é protocolo de Camada 3 usado para mensagens de controle e erro. ICMP types incluem: Type 0 Echo Reply (ping response), Type 3 Destination Unreachable (códigos: net/host/port unreachable, fragmentation needed), Type 5 Redirect, Type 8 Echo Request (ping), Type 11 Time Exceeded (usado por traceroute). ICMP não transporta dados de aplicação; é auxiliar ao IP. Ping usa ICMP Echo Request/Reply para testar reachability. Traceroute usa TTL expired (Type 11). ICMP pode ser abusado: Ping flood (DoS), Smurf attack (amplification). Firewalls frequentemente bloqueiam ICMP por segurança, mas isso quebra Path MTU Discovery. ICMPv6 adiciona funcionalidades de NDP (Neighbor Discovery Protocol).",
        "nivel": "base"
    },
    {
        "id": 51,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo permite que um host obtenha automaticamente endereço IP, máscara, gateway e DNS ao conectar-se à rede?",
        "alternativas": [
            "ARP (Address Resolution Protocol)",
            "DHCP (Dynamic Host Configuration Protocol)",
            "ICMP (Internet Control Message Protocol)",
            "RARP (Reverse ARP)"
        ],
        "respostaCorreta": 1,
        "explicacao": "DHCP (Dynamic Host Configuration Protocol - RFC 2131) automatiza configuração de rede usando processo DORA: Discover (cliente broadcast 0.0.0.0 → 255.255.255.255 UDP 67), Offer (servidor oferece IP), Request (cliente solicita IP oferecido), Acknowledge (servidor confirma e concede lease). DHCP fornece: IP address, subnet mask, default gateway, DNS servers, domain name, NTP server, TFTP server. Leases têm tempo de validade (T1=50% lease renew, T2=87.5% rebind). DHCP Relay (IP Helper) encaminha broadcasts DHCP através de roteadores. Reservations mapeiam MAC a IP específico. DHCP Option 82 adiciona informações de localização. DHCPv6 é versão para IPv6 (portas UDP 546/547).",
        "nivel": "base"
    },
    {
        "id": 52,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em FTP (File Transfer Protocol), qual modo de conexão estabelece conexões de dados iniciadas pelo servidor de volta ao cliente?",
        "alternativas": [
            "FTP Ativo (Active Mode)",
            "FTP Passivo (Passive Mode)",
            "FTP Explícito",
            "FTP Implícito"
        ],
        "respostaCorreta": 0,
        "explicacao": "FTP usa dois canais: control (porta 21) e data (porta 20). Em Active Mode, cliente abre porta alta aleatória e informa ao servidor via comando PORT; servidor inicia conexão de dados da porta 20 para a porta do cliente. Problema: NAT e firewalls bloqueiam conexões iniciadas externamente. Passive Mode resolve isso: cliente envia PASV, servidor abre porta alta aleatória e informa ao cliente via resposta PASV, cliente inicia conexão de dados. Passive mode funciona melhor com NAT/firewalls mas requer que servidor permita range de portas altas. FTPS (FTP Secure) adiciona TLS: Explícito (FTPES, porta 21, negocia TLS com AUTH TLS) ou Implícito (porta 990, TLS desde início). FTP é protocolo legado complexo; SFTP e HTTPS são preferidos.",
        "nivel": "base"
    },
    {
        "id": 53,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de túnel encapsula pacotes IP dentro de outros pacotes IP, criando redes privadas virtuais?",
        "alternativas": [
            "HTTP (Hypertext Transfer Protocol)",
            "GRE (Generic Routing Encapsulation)",
            "SMTP (Simple Mail Transfer Protocol)",
            "POP3 (Post Office Protocol)"
        ],
        "respostaCorreta": 1,
        "explicacao": "GRE (Generic Routing Encapsulation - RFC 2784) é protocolo de túnel que encapsula diversos protocolos de Camada 3 (IP, IPX, AppleTalk) dentro de IP. GRE cria túneis ponto-a-ponto stateless, permitindo: interconectar redes privadas sobre Internet, transportar protocolos não-IP, e multicast sobre redes que não suportam nativamente. Header GRE adiciona overhead de 24 bytes. GRE usa IP protocol 47. Limitações: sem criptografia (combine com IPsec para segurança), sem autenticação, stateless. GRE over IPsec é comum em VPNs site-to-site Cisco. Alternativas: IPsec tunnel mode, L2TP, VXLAN, MPLS. GRE é simples mas deprecado em favor de protocolos mais modernos e seguros. Usado em cenários legados e specific routing requirements.",
        "nivel": "base"
    },
    {
        "id": 54,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo usa porta TCP 3389 e permite acesso remoto gráfico a sistemas Windows?",
        "alternativas": [
            "SSH (Secure Shell)",
            "Telnet",
            "VNC (Virtual Network Computing)",
            "RDP (Remote Desktop Protocol)"
        ],
        "respostaCorreta": 3,
        "explicacao": "RDP (Remote Desktop Protocol) é protocolo proprietário Microsoft que fornece interface gráfica remota para Windows via porta TCP 3389 (UDP 3389 também para RemoteFX). RDP transmite: gráficos (comprimidos), entrada de teclado/mouse, clipboard, redirecionamento de impressora/drive, áudio. Network Level Authentication (NLA) adiciona camada de autenticação pré-conexão. RDP usa criptografia TLS. RDP é alvo frequente de ataques: brute force, BlueKeep (CVE-2019-0708), DejaBlue. Hardening: desabilitar RDP se não necessário, usar NLA, VPN para acesso, MFA, rate limiting, firewall. Alternativas: VNC (porta 5900+, open source, multi-plataforma), TeamViewer, AnyDesk. SSH (porta 22) fornece CLI remote. X11 forwarding via SSH é alternativa Linux.",
        "nivel": "base"
    },
    {
        "id": 55,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em IPsec, qual modo encapsula todo o pacote IP original, incluindo o header, dentro de um novo pacote IP?",
        "alternativas": [
            "Transport Mode",
            "Tunnel Mode",
            "NAT Traversal Mode",
            "Aggressive Mode"
        ],
        "respostaCorreta": 1,
        "explicacao": "IPsec (Internet Protocol Security) tem dois modos: Transport Mode protege apenas o payload (dados), mantendo header IP original - usado para comunicação end-to-end host-to-host. Tunnel Mode encapsula pacote IP completo (header + payload) dentro de novo pacote IP - usado para VPNs site-to-site, gateway-to-gateway. Tunnel mode adiciona novo header IP com endereços dos gateways VPN. IPsec usa: AH (Authentication Header, protocolo 51) para autenticação e integridade, ESP (Encapsulating Security Payload, protocolo 50) para confidencialidade (criptografia), autenticação e integridade. IKE (Internet Key Exchange, UDP 500) negocia parâmetros: algoritmos de criptografia (AES), hash (SHA), grupo DH (Diffie-Hellman). IPsec Phase 1 estabelece ISAKMP SA, Phase 2 estabelece IPsec SA. NAT-T (porta UDP 4500) resolve problemas de NAT.",
        "nivel": "base"
    },
    {
        "id": 56,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual header HTTP informa ao servidor qual tipo de conteúdo o cliente pode processar (ex: text/html, application/json)?",
        "alternativas": [
            "Content-Type",
            "Accept",
            "User-Agent",
            "Authorization"
        ],
        "respostaCorreta": 1,
        "explicacao": "Headers HTTP servem diferentes propósitos: Accept (request header) especifica MIME types que o cliente aceita (ex: 'Accept: application/json, text/html'). Content-Type (response/request header) indica tipo do conteúdo enviado. User-Agent identifica cliente (browser/app). Authorization contém credenciais (Basic, Bearer token). Outros headers importantes: Cache-Control (caching directives), Cookie/Set-Cookie (session management), Host (virtual hosting), Referer (origem da requisição), Origin (CORS), Content-Length (tamanho do body), Transfer-Encoding (chunked). Accept-Language negocia idioma. Accept-Encoding negocia compressão (gzip, deflate, br). Headers customizados usam prefixo X- (deprecado) ou padrão livre. CORS usa Access-Control-* headers. Compreender headers é essencial para desenvolvimento web e APIs RESTful.",
        "nivel": "base"
    },
    {
        "id": 57,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em SIP (Session Initiation Protocol), qual porta UDP padrão é usada para sinalização de chamadas VoIP?",
        "alternativas": [
            "5060",
            "5061",
            "1720",
            "5004"
        ],
        "respostaCorreta": 0,
        "explicacao": "SIP (Session Initiation Protocol - RFC 3261) é protocolo de sinalização para VoIP, videoconferência e mensagens instantâneas, usando UDP/TCP porta 5060 (porta 5061 para SIP sobre TLS). SIP estabelece, modifica e termina sessões. Métodos SIP: INVITE (inicia chamada), ACK (confirma INVITE), BYE (termina chamada), CANCEL (cancela requisição pendente), REGISTER (registra localização), OPTIONS (query capabilities). SIP usa SDP (Session Description Protocol) para negociar codec e parâmetros de mídia. Endereços SIP: sip:user@domain ou sip:1234@192.168.1.1. Componentes: User Agent (UA), Proxy Server, Registrar, Redirect Server. RTP/RTCP transportam mídia de áudio/vídeo. SIP compete com H.323 (usa porta 1720). SIP trunking substitui linhas telefônicas tradicionais.",
        "nivel": "base"
    },
    {
        "id": 58,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo da camada de aplicação permite acesso remoto seguro via linha de comando, substituindo Telnet?",
        "alternativas": [
            "SSH (Secure Shell)",
            "FTP (File Transfer Protocol)",
            "SNMP (Simple Network Management Protocol)",
            "HTTP (Hypertext Transfer Protocol)"
        ],
        "respostaCorreta": 0,
        "explicacao": "SSH (Secure Shell - RFC 4253) fornece acesso remoto seguro via CLI usando porta TCP 22, oferecendo: autenticação forte (password, public key, Kerberos), criptografia de sessão (AES, ChaCha20), integridade (HMAC), e compressão opcional. SSH substitui Telnet (porta 23, clear text). SSH também permite: SCP/SFTP para transferência de arquivos, port forwarding (local, remote, dynamic - SOCKS proxy), X11 forwarding (GUI apps), tunneling de protocolos. Versões: SSHv1 (inseguro, deprecated), SSHv2 (padrão atual). Autenticação por chaves: gerar par (ssh-keygen), copiar pública para servidor (ssh-copy-id), conectar sem senha. SSH é fundamental para administração de servidores Linux, network devices, e DevOps. Hardening: desabilitar root login, usar key-based auth, fail2ban, mudar porta padrão.",
        "nivel": "base"
    },
    {
        "id": 59,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em LDAP (Lightweight Directory Access Protocol), qual porta TCP padrão é usada para consultas não criptografadas?",
        "alternativas": [
            "389",
            "636",
            "3268",
            "88"
        ],
        "respostaCorreta": 0,
        "explicacao": "LDAP (Lightweight Directory Access Protocol - RFC 4511) é protocolo para acessar e manter serviços de diretório distribuído, usando porta TCP 389 (636 para LDAPS com SSL/TLS, 3268/3269 para Global Catalog no Active Directory). LDAP organiza dados hierarquicamente: DC (Domain Component), OU (Organizational Unit), CN (Common Name). Distinguished Name (DN) identifica entrada unicamente: 'CN=John Doe,OU=Users,DC=example,DC=com'. Operações: bind (autenticação), search (query), add/delete/modify (manipulação). Filtros de busca: (objectClass=user), (&(cn=John*)(mail=*@example.com)). LDAP é base do Active Directory (AD). StartTLS upgrade conexão 389 para TLS. SASL (Simple Authentication and Security Layer) fornece autenticação flexível. ldapsearch é ferramenta CLI para queries.",
        "nivel": "base"
    },
    {
        "id": 60,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de sincronização de diretórios da Microsoft usa Kerberos para autenticação e opera em ambientes Active Directory?",
        "alternativas": [
            "NFS (Network File System)",
            "SMB/CIFS (Server Message Block)",
            "AFP (Apple Filing Protocol)",
            "WebDAV"
        ],
        "respostaCorreta": 1,
        "explicacao": "SMB (Server Message Block), também conhecido como CIFS (Common Internet File System), é protocolo Microsoft para compartilhamento de arquivos, impressoras e comunicação inter-processos. SMB usa portas TCP 445 (direto sobre TCP/IP) e 139 (NetBIOS sobre TCP). Versões: SMB1 (vulnerável a WannaCry/EternalBlue, deve ser desabilitado), SMB2 (2006, performance melhorada), SMB3 (2012+, criptografia AES-128, SMB multichannel, RDMA). SMB integra com Active Directory e Kerberos (porta 88) para autenticação single sign-on. NTLMv2 é alternativa quando Kerberos não disponível. Samba implementa SMB em Linux. SMB signing previne man-in-the-middle. SMB encryption (SMB 3.0+) protege dados em trânsito. Comando: net use, smbclient.",
        "nivel": "base"
    },
    {
        "id": 61,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em WebSocket, após o handshake HTTP inicial, qual tipo de comunicação é estabelecida?",
        "alternativas": [
            "Half-duplex unidirecional",
            "Full-duplex bidirecional",
            "Simplex cliente para servidor",
            "Broadcast multicast"
        ],
        "respostaCorreta": 1,
        "explicacao": "WebSocket (RFC 6455) é protocolo que fornece comunicação full-duplex bidirecional sobre single TCP connection, permitindo que servidor e cliente enviem dados independentemente e simultaneamente. WebSocket inicia com HTTP handshake upgrade (porta 80/443): cliente envia 'Upgrade: websocket' e 'Connection: Upgrade', servidor responde '101 Switching Protocols'. Após handshake, protocolo muda para WebSocket (ws:// ou wss:// para seguro). Vantagens sobre HTTP polling: latência reduzida, overhead menor (headers compactos), real-time bidirectional. Casos de uso: chat applications, gaming, trading platforms, collaborative tools, live dashboards. WebSocket frames são lightweight. Socket.IO é biblioteca que abstrai WebSocket com fallbacks (long-polling).",
        "nivel": "base"
    },
    {
        "id": 62,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de roteamento multicast usa conceito de Rendezvous Point (RP) para distribuição de tráfego?",
        "alternativas": [
            "IGMP (Internet Group Management Protocol)",
            "PIM Sparse Mode",
            "DVMRP (Distance Vector Multicast Routing Protocol)",
            "MOSPF (Multicast OSPF)"
        ],
        "respostaCorreta": 1,
        "explicacao": "PIM (Protocol Independent Multicast) tem dois modos: Dense Mode (assume receptores em toda rede, flood-and-prune) e Sparse Mode (assume receptores espalhados, explicit join). PIM Sparse Mode usa Rendezvous Point (RP) como ponto de encontro: fontes registram com RP, receptores enviam joins para RP, RP conecta fontes e receptores. Após estabelecido, muda para Shortest Path Tree (SPT) diretamente da fonte. RP pode ser: estático (configurado manualmente), Auto-RP (Cisco proprietário), ou BSR (Bootstrap Router, padrão aberto). PIM usa mensagens sobre unicast, não requer protocolo de roteamento específico (protocol independent). IGMP opera entre hosts e roteadores. PIM-SM é padrão para multicast enterprise e ISP devido à escalabilidade.",
        "nivel": "base"
    },
    {
        "id": 63,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em RADIUS (Remote Authentication Dial-In User Service), qual porta UDP é usada para accounting (contabilização)?",
        "alternativas": [
            "1812 (autenticação) e 1813 (accounting)",
            "1645 (autenticação) e 1646 (accounting)",
            "49 (TACACS+)",
            "389 (LDAP)"
        ],
        "respostaCorreta": 0,
        "explicacao": "RADIUS (RFC 2865) é protocolo AAA (Authentication, Authorization, Accounting) client-server para autenticação centralizada. Portas oficiais: UDP 1812 (authentication) e 1813 (accounting); portas legadas não-oficiais: 1645 e 1646. Fluxo: supplicant (usuário) → authenticator (NAS, AP, switch) → RADIUS server (valida contra AD, LDAP). Mensagens: Access-Request, Access-Accept, Access-Reject, Access-Challenge (para OTP/MFA), Accounting-Request, Accounting-Response. RADIUS criptografa apenas senha (MD5 hash com shared secret), restante do pacote é clear text. Atributos RADIUS (AVPs) carregam: username, NAS-IP-Address, Framed-IP-Address, Session-Timeout. RADIUS é usado em: 802.1X, VPN authentication, Wi-Fi Enterprise. Alternativa: TACACS+ (porta TCP 49, Cisco, criptografia completa).",
        "nivel": "base"
    },
    {
        "id": 64,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de descoberta de serviços permite que dispositivos anunciem e descubram serviços em redes locais sem configuração?",
        "alternativas": [
            "DNS-SD (DNS Service Discovery) / mDNS (Multicast DNS)",
            "DHCP (Dynamic Host Configuration Protocol)",
            "ARP (Address Resolution Protocol)",
            "ICMP (Internet Control Message Protocol)"
        ],
        "respostaCorreta": 0,
        "explicacao": "mDNS (Multicast DNS - RFC 6762) e DNS-SD (DNS Service Discovery - RFC 6763) permitem zero-configuration networking. mDNS resolve nomes .local (ex: printer.local) enviando queries multicast (224.0.0.251 IPv4, ff02::fb IPv6) porta UDP 5353, sem servidor DNS. DNS-SD usa DNS records (PTR, SRV, TXT) para anunciar serviços: tipo (_http._tcp.local), instância (My Printer._http._tcp.local), porta, prioridade. Implementações: Apple Bonjour, Avahi (Linux). Casos de uso: descobrir impressoras, AirPlay devices, servidores locais. UPnP/SSDP (UDP 1900) é alternativa Microsoft. Multicast pode não atravessar roteadores sem configuração. Segurança: mDNS não tem autenticação, apenas para redes confiáveis.",
        "nivel": "base"
    },
    {
        "id": 65,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em CoAP (Constrained Application Protocol), projetado para IoT, qual protocolo de transporte é tipicamente usado?",
        "alternativas": [
            "TCP (Transmission Control Protocol)",
            "UDP (User Datagram Protocol)",
            "SCTP (Stream Control Transmission Protocol)",
            "DCCP (Datagram Congestion Control Protocol)"
        ],
        "respostaCorreta": 1,
        "explicacao": "CoAP (Constrained Application Protocol - RFC 7252) é protocolo web projetado para dispositivos IoT com recursos limitados (memória, CPU, energia), usando UDP porta 5683 (5684 para CoAPS com DTLS). CoAP é similar ao HTTP mas otimizado: binary encoding (vs text), mensagens compactas (4 bytes header mínimo), suporta multicast, confirmable (CON) e non-confirmable (NON) messages. Métodos: GET, POST, PUT, DELETE. Observ pattern permite subscriptions para recursos (como MQTT). CoAP usa URIs: coap://[host]:[port]/[path]. DTLS (Datagram TLS) fornece segurança sobre UDP. CoAP é alternativa lightweight ao HTTP/HTTPS para sensores, actuators, M2M. Proxies HTTP-CoAP permitem integração com web. Bibliotecas: libcoap, Californium (Java).",
        "nivel": "base"
    },
    {
        "id": 66,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo MQTT (Message Queuing Telemetry Transport) usa para transporte confiável em ambientes IoT?",
        "alternativas": [
            "UDP exclusivamente",
            "TCP (porta 1883 não-seguro, 8883 seguro)",
            "ICMP",
            "GRE"
        ],
        "respostaCorreta": 1,
        "explicacao": "MQTT (Message Queuing Telemetry Transport - ISO/IEC 20922) é protocolo publish-subscribe lightweight para IoT e M2M, usando TCP porta 1883 (8883 para MQTT over TLS/SSL) para confiabilidade. Arquitetura: publishers enviam mensagens para topics (ex: home/bedroom/temperature), broker central roteia para subscribers interessados nesses topics. QoS levels: 0 (at most once, fire-and-forget), 1 (at least once, com acknowledgment), 2 (exactly once, four-way handshake). Topics hierárquicos com wildcards: + (single level), # (multi-level). Retained messages mantêm última mensagem para novos subscribers. LWT (Last Will and Testament) notifica desconexão. MQTT é ideal para: sensores remotos, low-bandwidth, intermittent connectivity. Alternativa: AMQP (mais complexo, enterprise). Brokers: Mosquitto, HiveMQ.",
        "nivel": "base"
    },
    {
        "id": 67,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em BGP (Border Gateway Protocol), qual atributo é usado para influenciar seleção de caminho preferencial ao entrar no AS?",
        "alternativas": [
            "AS_PATH",
            "LOCAL_PREF (Local Preference)",
            "MED (Multi-Exit Discriminator)",
            "NEXT_HOP"
        ],
        "respostaCorreta": 2,
        "explicacao": "BGP path selection usa múltiplos atributos em ordem: 1) Weight (Cisco proprietário, local apenas), 2) LOCAL_PREF (local preference, maior é melhor, influencia tráfego saindo do AS), 3) Locally originated routes, 4) AS_PATH (menor é melhor), 5) Origin (IGP > EGP > Incomplete), 6) MED (Multi-Exit Discriminator, menor é melhor, sugere ao vizinho qual link usar para entrar no AS), 7) eBGP > iBGP, 8) IGP metric to NEXT_HOP, 9) Oldest path, 10) Lowest Router ID. MED é métrica enviada para neighbor AS sugerindo caminho preferido quando múltiplos links conectam os ASs. MED tem escopo limitado (apenas primeiro AS hop). LOCAL_PREF influencia saída, MED influencia entrada. Atributos well-known: mandatory (ORIGIN, AS_PATH, NEXT_HOP) e discretionary (LOCAL_PREF, ATOMIC_AGGREGATE). Optional: transitive (COMMUNITY, AGGREGATOR) e non-transitive (MED, ORIGINATOR_ID).",
        "nivel": "base"
    },
    {
        "id": 68,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo permite distribuição de carga e alta disponibilidade operando na Camada 4 (transporte) ou Camada 7 (aplicação)?",
        "alternativas": [
            "Load Balancing via GLBP/VRRP",
            "Reverse Proxy / Load Balancer (ex: HAProxy, NGINX)",
            "Round-Robin DNS",
            "Multipath TCP"
        ],
        "respostaCorreta": 1,
        "explicacao": "Load Balancers distribuem tráfego entre múltiplos servidores para escalabilidade, performance e alta disponibilidade. Layer 4 LB (Transport): decisões baseadas em IP/porta, rápido, não inspeciona conteúdo, usa algoritmos (round-robin, least connections, source IP hash). Layer 7 LB (Application): inspeciona HTTP headers/content, permite routing baseado em URL, hostname, cookies; pode fazer SSL termination, caching, content rewriting. Tecnologias: HAProxy, NGINX, F5 BIG-IP, AWS ELB/ALB, Kubernetes Ingress. Health checks monitoram backend servers. Session persistence (sticky sessions) via cookies ou IP. LB pode ser hardware (appliances), software (VMs), ou cloud-native. Algoritmos avançados: weighted round-robin, least response time, adaptive. Global Load Balancing (GSLB) distribui entre data centers via DNS.",
        "nivel": "base"
    },
    {
        "id": 69,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo Kerberos usa para autenticação em redes Microsoft Active Directory, operando na porta TCP/UDP 88?",
        "alternativas": [
            "NTLM (NT LAN Manager)",
            "Kerberos",
            "RADIUS",
            "OAuth"
        ],
        "respostaCorreta": 1,
        "explicacao": "Kerberos (RFC 4120) é protocolo de autenticação baseado em tickets, padrão no Active Directory, usando porta TCP/UDP 88. Componentes: KDC (Key Distribution Center com AS - Authentication Service e TGS - Ticket Granting Service), Client, Service. Fluxo: 1) Client autentica com AS, recebe TGT (Ticket Granting Ticket), 2) Client apresenta TGT ao TGS, recebe Service Ticket, 3) Client apresenta Service Ticket ao service desejado. Tickets são criptografados com chaves derivadas de passwords, têm validade limitada (default 10h TGT, 10min service ticket), e contêm PAC (Privilege Attribute Certificate) com group memberships. Kerberos usa criptografia simétrica (AES256, AES128, DES deprecated). Requer sincronização de tempo (NTP, tolerância 5min). Ataques: Golden Ticket, Silver Ticket, Kerberoasting. NTLM é fallback legacy quando Kerberos não disponível.",
        "nivel": "base"
    },
    {
        "id": 70,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em OAuth 2.0, qual grant type é recomendado para aplicações web server-side com confidencialidade garantida?",
        "alternativas": [
            "Implicit Grant",
            "Resource Owner Password Credentials Grant",
            "Authorization Code Grant",
            "Client Credentials Grant"
        ],
        "respostaCorreta": 2,
        "explicacao": "OAuth 2.0 (RFC 6749) é framework de autorização delegada. Grant types: 1) Authorization Code Grant (mais seguro, para web apps server-side): user autoriza via browser, recebe code, app troca code por access token via backchannel com client secret. 2) Implicit Grant (deprecated, era para SPAs): access token retorna diretamente via redirect, sem refresh token, menor segurança. 3) Resource Owner Password Credentials (legacy, para trusted apps): app coleta username/password diretamente, inadequado para third-party. 4) Client Credentials (machine-to-machine): service autentica com client_id/secret, sem user context. Authorization Code com PKCE (Proof Key for Code Exchange) é padrão para mobile/SPA. Tokens: Access Token (curta duração, autorização), Refresh Token (longa duração, renovação). Escopos definem permissões. OpenID Connect extends OAuth para authentication (ID Token JWT).",
        "nivel": "base"
    },
    {
        "id": 71,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo QUIC (Quick UDP Internet Connections) substitui, oferecendo multiplexing e segurança integrada?",
        "alternativas": [
            "UDP apenas",
            "TCP + TLS (como usado em HTTPS)",
            "SCTP",
            "ICMP"
        ],
        "respostaCorreta": 1,
        "explicacao": "QUIC (RFC 9000) é protocolo de transporte moderno desenvolvido por Google, base do HTTP/3, rodando sobre UDP mas fornecendo funcionalidades de TCP (reliable, ordered delivery) e TLS 1.3 (criptografia integrada desde handshake inicial). Vantagens sobre TCP+TLS: 0-RTT connection establishment (vs 3-RTT para TCP+TLS), multiplexing sem head-of-line blocking (streams independentes), connection migration (sobrevive mudança de IP/rede, útil para mobile), built-in packet loss recovery per-stream. QUIC usa porta UDP 443. Stream multiplexing permite múltiplas requisições HTTP simultâneas sem bloqueio mútuo. Amplification attack mitigation via address validation. Browsers modernos (Chrome, Firefox, Edge) suportam HTTP/3 over QUIC. QUIC melhora performance especialmente em redes com packet loss e mobile networks.",
        "nivel": "base"
    },
    {
        "id": 72,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em TLS 1.3, qual melhoria significativa reduz latência na negociação do handshake comparado ao TLS 1.2?",
        "alternativas": [
            "Uso de certificados maiores",
            "1-RTT handshake (vs 2-RTT no TLS 1.2), com suporte a 0-RTT resumption",
            "Remoção de criptografia",
            "Aumento do tamanho das chaves"
        ],
        "respostaCorreta": 1,
        "explicacao": "TLS 1.3 (RFC 8446, 2018) introduz melhorias significativas: 1-RTT handshake (vs 2-RTT no TLS 1.2) reduz latência ao combinar key exchange e certificado na primeira mensagem. 0-RTT resumption permite envio de dados criptografados na primeira mensagem para conexões retomadas (trade-off: vulnerável a replay attacks). Remove algoritmos inseguros: RSA key exchange, SHA-1, MD5, RC4, DES, 3DES, CBC mode ciphers. Apenas Perfect Forward Secrecy (PFS): Ephemeral Diffie-Hellman (DHE, ECDHE). Simplifica handshake removendo renegotiation. Ciphersuites modernas: TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256. Encrypted Server Hello protege metadados. TLS 1.3 é padrão em browsers e servers modernos; TLS 1.2 é mínimo aceitável, TLS 1.0/1.1 deprecated por PCI-DSS.",
        "nivel": "base"
    },
    {
        "id": 73,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de streaming de vídeo adaptativo divide conteúdo em chunks e permite que cliente ajuste qualidade baseado em bandwidth disponível?",
        "alternativas": [
            "RTSP (Real Time Streaming Protocol)",
            "HLS (HTTP Live Streaming) / MPEG-DASH",
            "RTP (Real-time Transport Protocol)",
            "RTMP (Real-Time Messaging Protocol)"
        ],
        "respostaCorreta": 1,
        "explicacao": "Adaptive Bitrate Streaming (ABR) divide vídeo em segmentos curtos (2-10s) codificados em múltiplas qualidades, permitindo que player ajuste qualidade dinamicamente. HLS (HTTP Live Streaming - Apple): usa HTTP, formato .m3u8 playlist, segmentos .ts, amplamente suportado. MPEG-DASH (Dynamic Adaptive Streaming over HTTP - padrão ISO): formato MPD manifest, segmentos .m4s, codec-agnostic. Ambos funcionam sobre HTTP/HTTPS (porta 80/443), atravessam firewalls facilmente, usam CDN para escalabilidade. Player mede bandwidth e buffer, seleciona apropriado bitrate. Vantagens: melhor QoE (Quality of Experience), funciona em redes variáveis. RTSP/RTP são para streaming real-time mas não adaptativo. RTMP (Adobe Flash) é legado, substituído por HLS/DASH. WebRTC é para comunicação peer-to-peer ultra-low latency.",
        "nivel": "base"
    },
    {
        "id": 74,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em gRPC (gRPC Remote Procedure Call), qual protocolo e formato de serialização são usados por padrão?",
        "alternativas": [
            "HTTP/1.1 com XML",
            "HTTP/2 com Protocol Buffers (protobuf)",
            "WebSocket com JSON",
            "TCP puro com MessagePack"
        ],
        "respostaCorreta": 1,
        "explicacao": "gRPC (desenvolvido por Google) é framework RPC moderno para APIs de alta performance, usando HTTP/2 como transporte (multiplexing, bidirectional streaming, header compression) e Protocol Buffers (protobuf) como serialização (binary format compacto, type-safe, com IDL - Interface Definition Language). Características: 4 tipos de RPC (Unary, Server streaming, Client streaming, Bidirectional streaming), code generation automático em múltiplas linguagens (Go, Java, Python, C++, etc), deadlines/timeouts, cancelamento, metadata (como HTTP headers). Autenticação via TLS, tokens, ou interceptors. gRPC é ideal para: microservices communication, APIs internas, mobile-to-backend, IoT. HTTP/2 requer TLS em browsers mas gRPC pode usar plain TCP. Alternativas: REST/JSON (mais simples, human-readable), GraphQL (flexible queries), Thrift (Facebook). gRPC-Web permite browsers via proxy.",
        "nivel": "base"
    },
    {
        "id": 75,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo permite que dispositivos de rede notifiquem eventos através de mensagens XML sobre HTTP, usado em gerenciamento de redes?",
        "alternativas": [
            "NETCONF (Network Configuration Protocol)",
            "RESTCONF",
            "SNMP Traps",
            "Syslog"
        ],
        "respostaCorreta": 0,
        "explicacao": "NETCONF (Network Configuration Protocol - RFC 6241) é protocolo baseado em XML sobre SSH (porta 830) ou TLS para configuração e gerenciamento de dispositivos de rede. NETCONF usa operações RPC: <get-config>, <edit-config>, <copy-config>, <delete-config>, <lock>, <unlock>, <commit>. Datastores: running (ativa), candidate (staging), startup (boot config). Suporta transações atômicas e rollback. YANG (Yet Another Next Generation) é linguagem de modelagem de dados para NETCONF. RESTCONF (RFC 8040) é interface RESTful sobre HTTP/HTTPS para YANG models. Comparação: SNMP é polling-based com limited writes; NETCONF é transaction-based com full read/write. Syslog (UDP 514/TCP 6514) é para logging unidirecional, não RPC. NETCONF/YANG são padrões modernos para network automation (Ansible, Python netmiko/ncclient).",
        "nivel": "base"
    },
    {
        "id": 76,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em HTTP/2, qual técnica permite que servidor envie recursos proativamente ao cliente antes mesmo de serem solicitados?",
        "alternativas": [
            "Long Polling",
            "Server Push",
            "WebHooks",
            "Chunked Transfer Encoding"
        ],
        "respostaCorreta": 1,
        "explicacao": "HTTP/2 (RFC 7540, 2015) introduz melhorias sobre HTTP/1.1: multiplexing (múltiplas requests/responses sobre single TCP connection sem head-of-line blocking), header compression (HPACK), binary framing (vs text), stream prioritization, e Server Push. Server Push permite servidor enviar recursos (CSS, JS, images) proativamente quando cliente solicita HTML, reduzindo round-trips. Cliente pode rejeitar pushes via RST_STREAM. Trade-off: pode desperdiçar banda se cliente já tem recurso cached. HTTP/2 mantém semântica HTTP/1.1 (methods, status codes, headers), mudando apenas wire protocol. Requer TLS na prática (HTTPS). h2 (TLS) vs h2c (cleartext). HTTP/3 migra para QUIC/UDP. Server Push está sendo deprecado em favor de Early Hints (103 status code). Long Polling e WebHooks são técnicas diferentes de HTTP/1.1.",
        "nivel": "base"
    },
    {
        "id": 77,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de sincronização de tempo oferece precisão sub-microsegundo em LANs, usado em ambientes de trading e automação industrial?",
        "alternativas": [
            "NTP (Network Time Protocol)",
            "PTP / IEEE 1588 (Precision Time Protocol)",
            "SNTP (Simple NTP)",
            "Chrony"
        ],
        "respostaCorreta": 1,
        "explicacao": "PTP (Precision Time Protocol - IEEE 1588) oferece sincronização de tempo com precisão de nanosegundos a microsegundos em LANs, muito superior ao NTP (milissegundos). PTP usa hardware timestamping em NICs e switches para eliminar jitter de software. Hierarquia: Grandmaster Clock (GPS/atomic clock source) → Boundary Clocks (switches) → Ordinary Clocks (end devices). Mensagens PTP: Sync, Follow_Up, Delay_Req, Delay_Resp. PTP profiles para diferentes indústrias: telecom, power, automotive. Use cases: high-frequency trading (HFT), 5G base stations, industrial automation, test/measurement, broadcast media (SDI/SMPTE 2110). NTP é suficiente para maioria de aplicações corporativas. SNTP é cliente-only simplificado. Chrony é implementação NTP moderna. PTP requer infra suportada (PTP-aware switches, NICs com hardware timestamping).",
        "nivel": "base"
    },
    {
        "id": 78,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Em MPLS (Multiprotocol Label Switching), o que os LSRs (Label Switching Routers) usam para encaminhar pacotes?",
        "alternativas": [
            "Endereços IP de origem e destino",
            "Labels de 20 bits inseridos entre Camada 2 e 3",
            "Apenas endereços MAC",
            "Números de porta TCP/UDP"
        ],
        "respostaCorreta": 1,
        "explicacao": "MPLS (Multiprotocol Label Switching) é tecnologia de encaminhamento que usa labels de 32 bits (20 bits label, 3 bits exp/QoS, 1 bit bottom-of-stack, 8 bits TTL) inseridos entre headers Camada 2 (Ethernet) e Camada 3 (IP) para fazer forwarding decisions. LSRs (Label Switching Routers) fazem label swapping baseado em LFIB (Label Forwarding Information Base), muito mais rápido que routing table lookups tradicionais. LDP (Label Distribution Protocol) distribui labels. LSPs (Label Switched Paths) são circuitos virtuais unidirecionais. Ingress LER (Label Edge Router) pushes label, core LSRs swappers label, Egress LER pops label. MPLS permite: traffic engineering, VPNs (L2VPN/L3VPN), QoS, fast reroute (sub-50ms failover). Segment Routing extends MPLS com source routing.",
        "nivel": "base"
    },
    {
        "id": 79,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de VPN combina L2TP (Layer 2 Tunneling Protocol) com IPsec para fornecer confidencialidade e autenticação?",
        "alternativas": [
            "PPTP (Point-to-Point Tunneling Protocol)",
            "L2TP/IPsec",
            "OpenVPN",
            "WireGuard"
        ],
        "respostaCorreta": 1,
        "explicacao": "L2TP/IPsec combina L2TP (RFC 3931) para tunneling com IPsec para segurança, criando VPN robusta. L2TP alone não fornece criptografia; IPsec ESP fornece confidencialidade e autenticação. L2TP usa UDP 1701, IPsec usa UDP 500 (IKE) e UDP 4500 (NAT-T). Fluxo: IPsec ESP encapsula pacotes L2TP, L2TP encapsula frames PPP (Point-to-Point Protocol). L2TP/IPsec suporta múltiplos protocolos (IP, IPX, NetBEUI). Autenticação: PSK (Pre-Shared Key) ou certificates. PPTP (Microsoft, porta TCP 1723 + GRE) é inseguro (MSCHAP-v2 vulnerável). OpenVPN (SSL/TLS-based, TCP 443/UDP 1194) é mais flexível e atravessa firewalls facilmente. WireGuard é moderno, performático, criptografia state-of-art (ChaCha20, Curve25519), mas relativamente novo. IKEv2/IPsec é evolução com mobility support (MOBIKE).",
        "nivel": "base"
    },
    {
        "id": 80,
        "categoria": "protocolos",
        "tipo": "multipla",
        "enunciado": "Qual técnica HTTP permite que cliente especifique range de bytes para download parcial ou resumption de transferências interrompidas?",
        "alternativas": [
            "Chunked Transfer Encoding",
            "HTTP Range Requests (header Range)",
            "HTTP Pipelining",
            "Content Negotiation"
        ],
        "respostaCorreta": 1,
        "explicacao": "HTTP Range Requests (RFC 7233) permitem cliente solicitar partes específicas de recurso usando header 'Range: bytes=0-1023'. Servidor responde com status 206 Partial Content e header 'Content-Range: bytes 0-1023/5000'. Use cases: resumir downloads interrompidos (download managers), streaming de vídeo (seek to position), parallel downloads (download accelerators). Cliente verifica se servidor suporta ranges via header 'Accept-Ranges: bytes' na resposta. Multipart ranges permitem solicitar múltiplos segmentos não-contíguos. ETags e Last-Modified validam que recurso não mudou antes de resumir. Chunked Transfer Encoding (Transfer-Encoding: chunked) envia dados em chunks sem Content-Length definido, diferente de ranges. HTTP Pipelining (deprecated) envia múltiplas requests sem esperar responses. Content Negotiation seleciona representação (gzip, br, language).",
        "nivel": "base"
    },
    {
        "id": 81,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em criptografia simétrica, qual algoritmo é atualmente considerado padrão pela indústria para criptografia de dados em repouso e em trânsito?",
        "alternativas": [
            "DES (Data Encryption Standard)",
            "3DES (Triple DES)",
            "AES (Advanced Encryption Standard)",
            "RC4"
        ],
        "respostaCorreta": 2,
        "explicacao": "AES (Advanced Encryption Standard - FIPS 197, baseado em Rijndael) é algoritmo de criptografia simétrica padrão desde 2001, substituindo DES. AES suporta tamanhos de chave 128, 192, e 256 bits, operando em blocos de 128 bits. AES-256 é considerado seguro contra ataques brute-force mesmo com computação quântica futura. Modos de operação: ECB (inseguro, não use), CBC (requer IV, padding), CTR (stream cipher mode, parallelizável), GCM (Galois/Counter Mode, AEAD - Authenticated Encryption with Associated Data, preferido). AES é hardware-accelerated em CPUs modernas (AES-NI instructions). DES (56-bit key) é obsoleto, quebrado por brute-force. 3DES (168-bit effective security, legacy, deprecated por NIST). RC4 é stream cipher quebrado. ChaCha20 é alternativa moderna para dispositivos sem AES-NI.",
        "nivel": "base"
    },
    {
        "id": 82,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual algoritmo de criptografia assimétrica é baseado na dificuldade de fatoração de números primos grandes?",
        "alternativas": [
            "RSA (Rivest-Shamir-Adleman)",
            "ECC (Elliptic Curve Cryptography)",
            "Diffie-Hellman",
            "AES (Advanced Encryption Standard)"
        ],
        "respostaCorreta": 0,
        "explicacao": "RSA (1977) é algoritmo de criptografia de chave pública baseado na dificuldade de fatorar produto de dois primos grandes (p × q = n). RSA usa par de chaves: pública (n, e) para criptografar, privada (n, d) para descriptografar. Tamanhos típicos: 2048-bit (mínimo), 3072-bit, 4096-bit. RSA é usado para: key exchange, digital signatures, certificate authentication. Limitações: lento comparado a criptografia simétrica, tamanho de chave grande, vulnerável a quantum computers (Shor's algorithm). Prática moderna: usar RSA para trocar chave simétrica (hybrid cryptography), dados são criptografados com AES. ECC oferece segurança equivalente com chaves menores (256-bit ECC ≈ 3072-bit RSA). Padding schemes: PKCS#1 v1.5 (legacy), OAEP (Optimal Asymmetric Encryption Padding, recomendado).",
        "nivel": "base"
    },
    {
        "id": 83,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual função hash criptográfica produz um digest de 256 bits e é amplamente usada em blockchain e certificados digitais?",
        "alternativas": [
            "MD5 (Message Digest 5)",
            "SHA-1 (Secure Hash Algorithm 1)",
            "SHA-256 (SHA-2 family)",
            "CRC32 (Cyclic Redundancy Check)"
        ],
        "respostaCorreta": 2,
        "explicacao": "SHA-256 faz parte da família SHA-2 (Secure Hash Algorithm 2), produzindo hash de 256 bits (64 caracteres hexadecimais). Propriedades de hash criptográfico: determinístico (mesma entrada = mesmo hash), rápido de computar, one-way (impossível reverter), collision-resistant (difícil encontrar duas entradas com mesmo hash), avalanche effect (pequena mudança na entrada altera drasticamente o hash). SHA-256 é usado em: Bitcoin/blockchain, certificados SSL/TLS, assinaturas digitais, HMAC, password hashing (com salt). MD5 (128-bit) está quebrado (colisões encontradas em 2004), não deve ser usado para segurança. SHA-1 (160-bit) está deprecated (colisões demonstradas em 2017). SHA-2 family: SHA-224, SHA-256, SHA-384, SHA-512. SHA-3 (Keccak) é padrão mais recente. CRC32 é checksum, não hash criptográfico.",
        "nivel": "base"
    },
    {
        "id": 84,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em uma infraestrutura de chave pública (PKI), qual entidade é responsável por emitir, assinar e revogar certificados digitais?",
        "alternativas": [
            "RA (Registration Authority)",
            "CA (Certificate Authority)",
            "VA (Validation Authority)",
            "End Entity (Subscriber)"
        ],
        "respostaCorreta": 1,
        "explicacao": "CA (Certificate Authority) é entidade confiável central em PKI que: emite certificados digitais X.509, assina certificados com sua chave privada, mantém CRL (Certificate Revocation List) ou suporta OCSP (Online Certificate Status Protocol), e valida identidade de solicitantes. RA (Registration Authority) valida identidade de solicitantes antes de encaminhar para CA, mas não emite certificados. VA verifica status de certificados. Hierarquia: Root CA (self-signed, offline, altamente protegida) → Intermediate/Subordinate CA (emitem certificados para end entities) → End Entity certificates (servers, users). Certificate chain: end entity → intermediate → root. Trust store do sistema operacional contém root CAs confiáveis. Let's Encrypt é CA automatizada gratuita. Organizações podem ter CA interna (private PKI). Extended Validation (EV) certificates requerem validação rigorosa.",
        "nivel": "base"
    },
    {
        "id": 85,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual protocolo criptográfico permite que duas partes estabeleçam uma chave compartilhada segura sobre um canal inseguro sem trocá-la diretamente?",
        "alternativas": [
            "Diffie-Hellman Key Exchange",
            "RSA Key Transport",
            "AES Key Wrapping",
            "Symmetric Key Distribution"
        ],
        "respostaCorreta": 0,
        "explicacao": "Diffie-Hellman (DH, 1976) permite key agreement: duas partes geram chave compartilhada sem transmiti-la diretamente, baseado na dificuldade do problema do logaritmo discreto. Processo: ambas concordam em parâmetros públicos (primo p, gerador g), cada parte gera chave privada secreta (a, b), calcula valor público (A=g^a mod p, B=g^b mod p), troca valores públicos, calcula chave compartilhada (s=B^a mod p = A^b mod p). Vulnerável a man-in-the-middle sem autenticação. Variantes: Ephemeral DH (DHE) usa chaves temporárias para Perfect Forward Secrecy (PFS). ECDH (Elliptic Curve DH) é versão ECC mais eficiente. Usado em: TLS (DHE/ECDHE), IPsec (IKE), SSH. RSA key transport criptografa chave simétrica com chave pública do receptor. DH é preferido modernamente por suportar PFS.",
        "nivel": "base"
    },
    {
        "id": 86,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual técnica criptográfica adiciona dados aleatórios únicos a senhas antes do hashing para prevenir rainbow table attacks?",
        "alternativas": [
            "Encryption",
            "Salting",
            "Padding",
            "Nonce"
        ],
        "respostaCorreta": 1,
        "explicacao": "Salt é valor aleatório único concatenado com senha antes do hashing: hash(password + salt). Cada usuário tem salt único armazenado junto com hash. Salt previne: rainbow tables (tabelas pré-computadas de hashes), identificação de senhas idênticas entre usuários, e ataques de dicionário acelerados. Salt não precisa ser secreto, apenas único e suficientemente longo (≥128 bits recomendado). Algoritmos modernos de password hashing incorporam salting automaticamente: bcrypt, scrypt, Argon2 (winner do Password Hashing Competition 2015). Estes também usam key stretching (iterações múltiplas) para aumentar custo computacional. Pepper é secret adicional armazenado separadamente. Nunca armazene senhas em plaintext ou com hash simples (MD5, SHA-1). Password policies: comprimento mínimo, complexidade, não reutilização. MFA adiciona camada extra de segurança.",
        "nivel": "base"
    },
    {
        "id": 87,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em assinaturas digitais, qual operação o remetente realiza com sua chave privada para garantir autenticidade e integridade?",
        "alternativas": [
            "Criptografa toda a mensagem",
            "Calcula hash da mensagem e criptografa o hash com chave privada",
            "Descriptografa a mensagem",
            "Gera um novo par de chaves"
        ],
        "respostaCorreta": 1,
        "explicacao": "Assinatura digital garante: autenticidade (prova de origem), integridade (detecta modificação), e não-repúdio (remetente não pode negar). Processo de assinatura: 1) remetente calcula hash criptográfico da mensagem (SHA-256), 2) criptografa hash com sua chave privada (criando signature), 3) envia mensagem + signature. Verificação: 1) receptor descriptografa signature com chave pública do remetente (obtém hash original), 2) calcula hash da mensagem recebida, 3) compara hashes - se iguais, assinatura válida. Assinar hash é mais eficiente que assinar mensagem inteira. Algoritmos: RSA (RSASSA-PSS), DSA (Digital Signature Algorithm), ECDSA (Elliptic Curve DSA), EdDSA (Ed25519). Usado em: software signing, code signing, document signing (PDF), blockchain transactions, JWT tokens, email (S/MIME, PGP).",
        "nivel": "base"
    },
    {
        "id": 88,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual propriedade de segurança garante que, mesmo se uma chave de sessão for comprometida, sessões anteriores permanecem seguras?",
        "alternativas": [
            "Non-repudiation",
            "Perfect Forward Secrecy (PFS)",
            "Data Integrity",
            "Availability"
        ],
        "respostaCorreta": 1,
        "explicacao": "Perfect Forward Secrecy (PFS), também chamado Forward Secrecy, garante que comprometimento de chave de longo prazo (private key) não compromete chaves de sessão anteriores. Implementado usando ephemeral keys (temporárias, descartadas após uso) no key exchange. Em TLS: DHE (Diffie-Hellman Ephemeral) e ECDHE (Elliptic Curve DHE) fornecem PFS, enquanto RSA key exchange não (master secret pode ser decriptado retroativamente se private key vazar). Cada sessão TLS com PFS usa par de chaves DH temporário único, destruído após estabelecer session keys. PFS é crítico para: proteção contra mass surveillance (captura de tráfego criptografado para decriptação futura), conformidade regulatória, e proteção de dados sensíveis. Trade-off: overhead computacional ligeiramente maior. TLS 1.3 exige PFS (remove RSA key exchange). Configuração: priorizar ECDHE cipher suites em servidores.",
        "nivel": "base"
    },
    {
        "id": 89,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual ataque criptográfico envolve analisar o tempo de execução de operações criptográficas para extrair informações sobre chaves secretas?",
        "alternativas": [
            "Brute Force Attack",
            "Man-in-the-Middle Attack",
            "Timing Attack (Side-Channel Attack)",
            "Dictionary Attack"
        ],
        "respostaCorreta": 2,
        "explicacao": "Timing Attack é tipo de side-channel attack que explora variações no tempo de execução de operações criptográficas. Implementações ingênuas podem vazar informações: comparações de strings com short-circuit (retorna imediatamente ao encontrar diferença), operações que variam com valor de bits da chave, cache timing (acesso a cache vs RAM tem tempos diferentes). Exemplo: verificação de HMAC byte-a-byte revela hash correto progressivamente. Mitigações: constant-time implementations (tempo independente de dados secretos), constant-time comparison functions, blinding techniques. Outros side-channels: power analysis (diferencial/simples, mede consumo de energia), electromagnetic emanations (TEMPEST), acoustic cryptanalysis (som de CPU), fault injection. Hardware Security Modules (HSM) e Trusted Execution Environments (TEE) resistem a muitos side-channels. Espectre/Meltdown são side-channels modernos exploitando execução especulativa de CPUs.",
        "nivel": "base"
    },
    {
        "id": 90,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em criptografia de curva elíptica (ECC), qual tamanho de chave oferece segurança equivalente a RSA 3072-bit?",
        "alternativas": [
            "128-bit ECC",
            "256-bit ECC",
            "512-bit ECC",
            "1024-bit ECC"
        ],
        "respostaCorreta": 1,
        "explicacao": "ECC (Elliptic Curve Cryptography) oferece mesma segurança que RSA/DH com chaves significativamente menores, baseado na dificuldade do problema do logaritmo discreto em curvas elípticas. Equivalências aproximadas: 256-bit ECC ≈ 3072-bit RSA, 384-bit ECC ≈ 7680-bit RSA, 512-bit ECC ≈ 15360-bit RSA. Vantagens ECC: chaves menores (certificados menores, menos banda), operações mais rápidas (especialmente em mobile/IoT), menor uso de memória. Curvas padronizadas: NIST curves (P-256/secp256r1, P-384, P-521), Curve25519 (usado em Ed25519 signatures e X25519 key exchange, considerado mais seguro que NIST curves por design sem backdoors potenciais). Algoritmos ECC: ECDSA (signatures), ECDH (key exchange), EdDSA (Ed25519). TLS 1.3 usa ECDHE. Bitcoin usa secp256k1. ECC é padrão moderno para novas implementações.",
        "nivel": "base"
    },
    {
        "id": 91,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual modo de operação de cifra de bloco transforma algoritmo de bloco em stream cipher, permitindo criptografia paralela?",
        "alternativas": [
            "ECB (Electronic Codebook)",
            "CBC (Cipher Block Chaining)",
            "CTR (Counter Mode)",
            "OFB (Output Feedback)"
        ],
        "respostaCorreta": 2,
        "explicacao": "CTR (Counter Mode) transforma block cipher (AES) em stream cipher: criptografa contador incrementado (nonce + counter) com chave, produzindo keystream que é XOR'd com plaintext. Vantagens CTR: paralelização (blocos independentes, GPU-friendly), acesso aleatório (pode decriptar qualquer bloco sem processar anteriores), não requer padding, erros não se propagam. Requer: nonce único por mensagem (never reuse nonce with same key!), counter único por bloco. ECB (não use!) criptografa cada bloco independentemente, revelando padrões. CBC requer IV aleatório, não paralelizável na criptografia (decriptação sim), erros se propagam, vulnerável a padding oracle attacks. GCM (Galois/Counter Mode) = CTR + autenticação (AEAD). CFB/OFB são stream modes menos usados. CTR é preferred para performance. ChaCha20 é stream cipher nativo (alternativa a AES-CTR).",
        "nivel": "base"
    },
    {
        "id": 92,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual protocolo criptográfico fornece autenticação de mensagem usando função hash e chave secreta compartilhada?",
        "alternativas": [
            "HMAC (Hash-based Message Authentication Code)",
            "Digital Signature",
            "Public Key Encryption",
            "Caesar Cipher"
        ],
        "respostaCorreta": 0,
        "explicacao": "HMAC (RFC 2104) fornece autenticação de mensagem e integridade usando hash function (SHA-256) e shared secret key. HMAC(K, M) = H((K ⊕ opad) || H((K ⊕ ipad) || M)), onde K=key, M=message, H=hash, opad/ipad=padding constants. HMAC garante: mensagem não foi alterada, origem possui chave secreta. Diferente de digital signature: HMAC usa criptografia simétrica (ambas partes conhecem key), signature usa assimétrica (apenas remetente tem private key). HMAC é mais rápido que signatures. Usado em: TLS (HMAC-SHA256 para MAC), IPsec, JWT tokens (HS256 = HMAC-SHA256), API authentication (HMAC-based). HMAC resiste a length extension attacks (diferente de hash simples). Tamanho de chave recomendado ≥ hash output size. HMAC não fornece confidencialidade, apenas autenticação - combine com encryption (Encrypt-then-MAC pattern).",
        "nivel": "base"
    },
    {
        "id": 93,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em TLS/SSL, qual extensão permite que cliente indique qual hostname está tentando acessar, permitindo hosting de múltiplos sites HTTPS no mesmo IP?",
        "alternativas": [
            "ALPN (Application-Layer Protocol Negotiation)",
            "SNI (Server Name Indication)",
            "OCSP Stapling",
            "Session Resumption"
        ],
        "respostaCorreta": 1,
        "explicacao": "SNI (Server Name Indication - RFC 6066) é extensão TLS que permite cliente enviar hostname desejado durante TLS handshake (ClientHello), antes de certificado ser negociado. Isso permite: múltiplos certificados SSL em mesmo IP (virtual hosting), CDN e load balancers rotearem para backend correto, wildcard e multi-domain certificates funcionarem apropriadamente. Sem SNI, servidor só pode apresentar um certificado por IP. Limitação: SNI transmite hostname em plaintext (privacy issue), resolvido parcialmente com ESNI (Encrypted SNI, draft) ou ECH (Encrypted Client Hello, TLS 1.3). Browsers modernos suportam SNI; problemas com: IE6 on XP, Android 2.x, Java 6. ALPN negocia protocolo de aplicação (HTTP/2, HTTP/3). OCSP Stapling melhora performance de verificação de revogação. Session Resumption reduz latência reutilizando session keys.",
        "nivel": "base"
    },
    {
        "id": 94,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual tipo de ataque contra TLS explora vulnerabilidade em cipher suites que usam CBC mode, permitindo decriptação byte-a-byte?",
        "alternativas": [
            "BEAST (Browser Exploit Against SSL/TLS)",
            "POODLE (Padding Oracle On Downgraded Legacy Encryption)",
            "Heartbleed",
            "CRIME"
        ],
        "respostaCorreta": 1,
        "explicacao": "POODLE (2014) explora vulnerabilidade em SSLv3 e alguns modos TLS CBC: atacante força fallback para SSLv3, manipula padding oracle para decriptar dados byte-a-byte. Mitigação: desabilitar SSLv3, usar apenas TLS 1.2+ com AEAD ciphers (GCM, ChaCha20-Poly1305). BEAST (2011) ataca TLS 1.0 CBC usando chosen plaintext para prever IV, mitigado com 1/n-1 record splitting ou TLS 1.1+. Heartbleed (2014) é buffer over-read bug no OpenSSL heartbeat extension, vaza memória do servidor incluindo private keys. CRIME (2012) usa compressão TLS para inferir plaintext. Lucky 13, DROWN, Logjam são outros ataques históricos. Defesa geral: usar TLS 1.3 (remove CBC, SSLv3, compressão), prefer AEAD, patch systems, monitor security advisories. Tools: testssl.sh, SSL Labs test.",
        "nivel": "base"
    },
    {
        "id": 95,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual esquema de compartilhamento de segredos permite que k-of-n partes reconstituam um segredo, mas k-1 ou menos não possam?",
        "alternativas": [
            "Shamir's Secret Sharing",
            "AES Key Wrapping",
            "Diffie-Hellman",
            "RSA Blinding"
        ],
        "respostaCorreta": 0,
        "explicacao": "Shamir's Secret Sharing (1979) divide segredo S em n shares de forma que qualquer k shares podem reconstruir S (threshold scheme), mas k-1 shares não revelam informação sobre S. Baseado em interpolação polinomial: segredo é coeficiente constante de polinômio grau k-1, shares são pontos no polinômio. Por exemplo, 3-of-5 scheme: precisa 3 de 5 shares para recuperar segredo. Use cases: backup de chaves criptográficas distribuído (master key de CA, Bitcoin wallets), nuclear launch codes, multi-party authorization. Verifiable Secret Sharing (VSS) adiciona verificação de shares válidas. Proactive Secret Sharing periodicamente renova shares sem alterar segredo. Alternativa: multisig (múltiplas assinaturas independentes). Implementações: SLIP39 (para Bitcoin), HashiCorp Vault (Shamir unseal), SSSS tool.",
        "nivel": "base"
    },
    {
        "id": 96,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em blockchain e criptomoedas, qual estrutura de dados criptográfica permite verificação eficiente de presença de transação no bloco?",
        "alternativas": [
            "Linked List",
            "Merkle Tree (Hash Tree)",
            "Binary Search Tree",
            "Skip List"
        ],
        "respostaCorreta": 1,
        "explicacao": "Merkle Tree é árvore binária onde cada nó folha é hash de bloco de dados, cada nó não-folha é hash de seus filhos. Root hash (Merkle root) representa todas transações no bloco. Permite: verificação eficiente de inclusão de transação (Merkle proof com log(n) hashes), Simplified Payment Verification (SPV clients verificam transações sem baixar blockchain completo), detecção de tampering (qualquer alteração muda root hash). Construção: hash transações em pares até chegar ao root. Bitcoin usa Merkle trees em cada bloco; block header contém Merkle root. SPV wallet baixa apenas headers (80 bytes cada) e Merkle proofs de transações relevantes. Patricia Merkle Trie (Ethereum) combina Merkle tree com trie para state storage. Git também usa estrutura similar (hash tree de commits). Merkle DAG (IPFS, DAG-based blockchains) generaliza o conceito.",
        "nivel": "base"
    },
    {
        "id": 97,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual algoritmo de acordo de chave pós-quântico foi selecionado pelo NIST como padrão para resistir a ataques de computadores quânticos?",
        "alternativas": [
            "RSA-4096",
            "ECDH P-521",
            "CRYSTALS-Kyber",
            "3DES"
        ],
        "respostaCorreta": 2,
        "explicacao": "NIST Post-Quantum Cryptography Standardization (2022) selecionou algoritmos resistentes a quantum computers: CRYSTALS-Kyber (key encapsulation), CRYSTALS-Dilithium (signatures), FALCON (signatures), SPHINCS+ (signatures). Quantum computers com algoritmo de Shor quebrariam RSA, ECC, DH em tempo polinomial. Kyber é baseado em Module Learning With Errors (M-LWE), oferece security levels comparáveis a AES-128/192/256 com chaves de ~1KB. Implementações começaram: Google Chrome experimenta com hybrid key exchange (Kyber + X25519), Signal usa PQXDH. Migração para PQC levará anos: atualizar protocolos (TLS 1.3 extension), bibliotecas, hardware. Harvest now, decrypt later attacks motivam urgência: adversários capturam tráfego criptografado hoje para decriptar quando quantum computers estiverem disponíveis. Hash-based signatures (SPHINCS+) são conservadores, resistentes a quantum com base estabelecida.",
        "nivel": "base"
    },
    {
        "id": 98,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual protocolo permite provar conhecimento de informação sem revelar a informação em si?",
        "alternativas": [
            "Public Key Infrastructure (PKI)",
            "Zero-Knowledge Proof (ZKP)",
            "Challenge-Response Authentication",
            "Symmetric Encryption"
        ],
        "respostaCorreta": 1,
        "explicacao": "Zero-Knowledge Proof (ZKP) permite prover (prover) demonstrar ao verificador (verifier) que afirmação é verdadeira sem revelar informação além da veracidade. Propriedades: completeness (se verdadeiro, verifier aceita), soundness (se falso, prover não convence verifier exceto com probabilidade negligível), zero-knowledge (verifier não aprende nada além da veracidade). Exemplo clássico: Ali Baba's cave (provar conhecimento de senha da porta secreta sem revelá-la). Tipos: interactive (múltiplas rodadas de desafio-resposta), non-interactive (single proof, NIZK com Common Reference String). Aplicações: autenticação sem senha, votação privada, blockchain privacy (Zcash usa zk-SNARKs), verificação de computação (verificar execução correta sem re-executar). zk-SNARKs (Succinct Non-interactive ARguments of Knowledge) e zk-STARKs são implementações modernas. ZKP é frontier de criptografia moderna.",
        "nivel": "base"
    },
    {
        "id": 99,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em autenticação multifator (MFA), qual fator representa 'algo que você possui'?",
        "alternativas": [
            "Senha ou PIN",
            "Token de hardware (YubiKey) ou smartphone com OTP",
            "Impressão digital ou reconhecimento facial",
            "Pergunta de segurança"
        ],
        "respostaCorreta": 1,
        "explicacao": "MFA (Multi-Factor Authentication) combina múltiplos fatores de autenticação independentes: Something you know (senha, PIN, pergunta de segurança), Something you have (token hardware, smartphone com OTP/authenticator app, smart card, SMS), Something you are (biometria: fingerprint, face, iris, voice). Senha alone é single-factor. MFA previne: password compromise (phishing, breach, keylogger), porque atacante precisa de múltiplos fatores. Implementações: TOTP (Time-based OTP, RFC 6238, Google Authenticator), HOTP (HMAC-based OTP), U2F/WebAuthn (FIDO2, YubiKey), Push notifications (Duo, Microsoft Authenticator), SMS (menos seguro, SIM swapping). Adaptive MFA considera contexto (location, device, risk score). MFA é requerimento comum: PCI-DSS, HIPAA, NIST 800-63. Passwordless authentication (FIDO2) usa something you have + something you are.",
        "nivel": "base"
    },
    {
        "id": 100,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual técnica de ofuscação de dados substitui dados sensíveis por tokens aleatórios, mantendo mapeamento em vault seguro?",
        "alternativas": [
            "Hashing",
            "Encryption",
            "Tokenization",
            "Steganography"
        ],
        "respostaCorreta": 2,
        "explicacao": "Tokenization substitui dados sensíveis (PAN - Primary Account Number, SSN, PHI) por tokens aleatórios sem relação matemática com original. Vault seguro mantém mapeamento token↔original. Vantagens sobre encryption: detokenization requer acesso ao vault (não há chave criptográfica para roubar), tokens podem preservar formato (format-preserving tokenization), reduz PCI-DSS scope (sistemas com tokens não armazenam card data). Diferenças: encryption é reversível com chave, hashing é one-way, tokenization requer vault service. Use cases: payment processing (substitui 16-digit PAN por token), data masking para ambientes non-production, compliance (PCI-DSS level reduction). Vault deve ser: highly available, audited, segregated network. Format-preserving encryption (FPE) é similar mas criptográfico. Data masking, anonymization, pseudonymization são técnicas relacionadas para privacy (GDPR).",
        "nivel": "base"
    },
    {
        "id": 101,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual ataque criptográfico explora implementações de padding em cifras de bloco para decriptar mensagens sem conhecer a chave?",
        "alternativas": [
            "Brute Force Attack",
            "Padding Oracle Attack",
            "Meet-in-the-Middle Attack",
            "Birthday Attack"
        ],
        "respostaCorreta": 1,
        "explicacao": "Padding Oracle Attack explora sistema que revela se padding de mensagem decriptada é válido ou não. Atacante envia ciphertexts modificados, observa respostas (erro de padding vs erro de integridade), e usa oracle para decriptar mensagem byte-a-byte sem chave. Requer: CBC mode com PKCS#7 padding, sistema que distingue erro de padding de outros erros. Famoso exemplo: ASP.NET vulnerability (2010). Mitigação: usar AEAD modes (GCM, ChaCha20-Poly1305) que autenticam antes de decriptar, implementar constant-time padding validation, não revelar tipo específico de erro. Encrypt-then-MAC pattern também previne. Padding oracle demonstra importância de: não vazar informação via side-channels, usar criptografia autenticada, tratar todos erros de decriptação identicamente. Variantes afetaram: SSL/TLS (POODLE), XML Encryption, diversos frameworks web.",
        "nivel": "base"
    },
    {
        "id": 102,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em sistemas de criptografia homomórfica, qual capacidade única permite operações diretamente em dados criptografados?",
        "alternativas": [
            "Decriptação mais rápida",
            "Chaves menores",
            "Computação sobre dados criptografados sem decriptar",
            "Resistência a ataques quânticos"
        ],
        "respostaCorreta": 2,
        "explicacao": "Homomorphic Encryption (HE) permite realizar operações (adição, multiplicação) diretamente em dados criptografados, produzindo resultado criptografado que, quando decriptado, corresponde ao resultado das operações em plaintext. Tipos: Partially HE (suporta adição OU multiplicação ilimitadas, ex: RSA é multiplicatively homomorphic), Somewhat HE (número limitado de operações), Fully HE (FHE, operações arbitrárias, Craig Gentry 2009). Use cases: cloud computing privado (processar dados sensíveis sem expor ao provider), private database queries, secure voting, genomics (análise sem revelar DNA). Trade-offs: FHE é extremamente lento (ordens de magnitude) e produz ciphertexts grandes. Schemes: BGV, BFV, CKKS (suporta aproximações para ML). Microsoft SEAL, IBM HElib, Google FHE toolkit são libraries. HE é research frontier com aplicações práticas emergentes em privacy-preserving ML.",
        "nivel": "base"
    },
    {
        "id": 103,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual vulnerabilidade no protocolo WEP (Wired Equivalent Privacy) permitiu sua quebra completa em minutos?",
        "alternativas": [
            "Uso de AES-256",
            "Reutilização de IV (Initialization Vector) com RC4",
            "Autenticação forte demais",
            "Chaves muito longas"
        ],
        "respostaCorreta": 1,
        "explicacao": "WEP (1997) usa RC4 stream cipher com 40-bit ou 104-bit key concatenada com 24-bit IV. Vulnerabilidades críticas: IV é curto (24 bits = 16.7 milhões de valores, colisões inevitáveis), IV transmitido em plaintext, keystream reuse quando IV repete, CRC-32 não é criptograficamente seguro (permite bit-flipping attacks). Ataques práticos: FMS attack, PTW attack (40.000 pacotes, <1 minuto). Aircrack-ng quebra WEP facilmente. WEP foi substituído por WPA (TKIP, temporário), depois WPA2 (AES-CCMP, padrão desde 2004), e WPA3 (SAE, 2018). WPA2 vulnerabilidades: KRACK attack (2017, reuso de nonce). WPA3 melhorias: forward secrecy, proteção contra ataques de dicionário offline, 192-bit security suite (Enterprise). Lesson: não usar crypto primitives incorretamente, IV/nonce deve ser único, autenticação é essencial, deprecate WEP/WPA.",
        "nivel": "base"
    },
    {
        "id": 104,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em criptografia, qual técnica esconde informação dentro de outros arquivos não-suspeitos (imagens, áudio, vídeo)?",
        "alternativas": [
            "Steganography",
            "Encryption",
            "Hashing",
            "Compression"
        ],
        "respostaCorreta": 0,
        "explicacao": "Steganography oculta existência de mensagem secreta dentro de cover media (imagem, áudio, vídeo, texto), diferente de encryption que oculta conteúdo mas não existência. Técnicas: LSB (Least Significant Bit) substitution em imagens (altera bits menos significativos de pixels), spread spectrum em áudio, modificação de espaços/tabs em texto. Steganalysis detecta steganography via análise estatística. Diferenças: encryption + steganography = security through obscurity + cryptography. Esteganografia não protege se detectada; combine com encryption para security. Use cases: watermarking digital, covert communication, censorship circumvention. Tools: Steghide, OpenStego, Outguess. Exemplos históricos: Histiaeus (mensagem em couro cabeludo de escravo), microdots (WWII), prisioneiros em regimes repressivos. Modern covert channels: timing covert channels, cache side-channels, IPv6 extension headers.",
        "nivel": "base"
    },
    {
        "id": 105,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual padrão de criptografia em nível de disco oferece criptografia transparente de partições inteiras?",
        "alternativas": [
            "BitLocker (Windows), LUKS (Linux), FileVault (macOS)",
            "ZIP encryption",
            "TLS/SSL",
            "PGP"
        ],
        "respostaCorreta": 0,
        "explicacao": "Full Disk Encryption (FDE) criptografa todas as partições do disco transparentemente, protegendo dados em repouso contra: roubo físico de dispositivo, acesso não autorizado quando powered off, análise forense sem autenticação. Implementações: BitLocker (Windows, TPM integration, AES-128/256), FileVault 2 (macOS, XTS-AES-128), LUKS (Linux Unified Key Setup, dm-crypt, AES-XTS). FDE requer: boot time authentication, key derivation de password/PIN + TPM/recovery key. Performance: hardware acceleration (AES-NI) torna overhead <5%. Self-Encrypting Drives (SED, OPAL standard) têm FDE em firmware (controller-level). Diferenças: FDE vs file-level encryption (EFS, eCryptfs), FDE protege disco inteiro incluindo swap/temp, file-level é granular. Limitações: não protege quando sistema powered on e unlocked, cold boot attacks, evil maid attacks (mitigado por Secure Boot + TPM). Complementar com full-system backup encryption.",
        "nivel": "base"
    },
    {
        "id": 106,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual algoritmo de consenso usado em blockchain requer prova criptográfica de trabalho computacional (hashcash)?",
        "alternativas": [
            "Proof of Stake (PoS)",
            "Proof of Work (PoW)",
            "Proof of Authority (PoA)",
            "Byzantine Fault Tolerance (BFT)"
        ],
        "respostaCorreta": 1,
        "explicacao": "Proof of Work (PoW) requer miners computarem hash criptográfico (SHA-256 double hash no Bitcoin) que satisfaça target difficulty (hash com N leading zeros). Processo: miner coleta transações pending, cria block, busca nonce que resulta em valid hash (mining). Primeiro miner que encontra válido broadcast block e recebe reward (block reward + transaction fees). Dificuldade ajusta para manter taxa de blocos constante (Bitcoin: ~10 min/block). PoW garante: imutabilidade (alterar história requer re-minerar, proibitivamente caro), sybil resistance (custo computacional, não identidade). Trade-offs: alto consumo energético, latência, baixo throughput. Alternativas: Proof of Stake (validators stake capital, Ethereum 2.0), Delegated PoS, Proof of Authority (permissioned, validators conhecidos). Hashcash (Adam Back 1997) foi precursor, originalmente anti-spam. 51% attack em PoW requer >50% hashrate.",
        "nivel": "base"
    },
    {
        "id": 107,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em S/MIME (Secure/Multipurpose Internet Mail Extensions), quais serviços de segurança são fornecidos para e-mail?",
        "alternativas": [
            "Apenas compressão",
            "Confidencialidade, integridade, autenticação e não-repúdio",
            "Apenas formatação de texto",
            "Somente tradução de idiomas"
        ],
        "respostaCorreta": 1,
        "explicacao": "S/MIME (RFC 8551) fornece segurança para e-mail usando criptografia de chave pública: Confidentiality (encryption com certificado X.509 do destinatário), Integrity (hashing), Authentication (digital signature com certificado do remetente), Non-repudiation (signature não pode ser negada). Processo envio: 1) assinar mensagem com private key, 2) criptografar com public key do destinatário. Recebimento: 1) decriptar com private key, 2) verificar signature com public key do remetente. S/MIME requer PKI: usuários têm certificados X.509 emitidos por CA (comercial ou corporativa). Formato: PKCS#7/CMS. Clientes: Outlook, Thunderbird, Apple Mail suportam S/MIME. Alternativa: PGP/GPG (web of trust vs hierarchical PKI, mais usado em comunidade open source). S/MIME é padrão corporativo, integrado com AD/Exchange. Encrypted e-mail protege em trânsito e repouso, mas headers (To, From, Subject) não são protegidos.",
        "nivel": "base"
    },
    {
        "id": 108,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual ataque aproveita colisões de aniversário em funções hash para encontrar duas mensagens com mesmo hash?",
        "alternativas": [
            "Preimage Attack",
            "Birthday Attack",
            "Rainbow Table Attack",
            "Brute Force Attack"
        ],
        "respostaCorreta": 1,
        "explicacao": "Birthday Attack explora paradoxo do aniversário: em grupo de apenas 23 pessoas, probabilidade >50% de duas compartilharem birthday. Para hash de n bits, collision esperada após ~2^(n/2) tentativas (vs 2^n para preimage). MD5 (128-bit) requer apenas 2^64 operações para collision, viável. SHA-1 (160-bit) teve collision demonstrada (SHAttered, 2017). Implicações: attacker pode criar dois documentos (um legítimo, um malicioso) com mesmo hash, obter signature no legítimo, substituir por malicioso. Mitigação: usar hashes com output grande (SHA-256: 2^128 operações para collision, infeasível), salted hashes. Birthday attack limita security de hash a metade do output size. Preimage attack (given hash, find message) requer 2^n operações, muito mais difícil. Second preimage (given message1, find message2 com same hash) é 2^n. Digital signatures são vulneráveis se hash é weak. Lesson: minimum 256-bit hash output para security.",
        "nivel": "base"
    },
    {
        "id": 109,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual protocolo permite autenticação de dispositivos em redes 802.1X usando certificados ou credenciais?",
        "alternativas": [
            "EAP (Extensible Authentication Protocol)",
            "HTTP Basic Auth",
            "FTP Authentication",
            "Telnet Login"
        ],
        "respostaCorreta": 0,
        "explicacao": "EAP (Extensible Authentication Protocol - RFC 3748) é framework de autenticação para network access control, usado em: 802.1X (port-based NAC), WPA2/WPA3 Enterprise Wi-Fi, PPP. Arquitetura: supplicant (cliente) ↔ authenticator (switch, AP) ↔ authentication server (RADIUS). EAP methods: EAP-TLS (certificados client+server, mais seguro, usado em ambientes high-security), PEAP (Protected EAP, tunel TLS, depois MSCHAPv2 ou GTC para password), EAP-TTLS (similar a PEAP, mais flexível), EAP-FAST (Cisco), EAP-SIM/AKA (cellular networks). 802.1X workflow: 1) supplicant conecta, authenticator bloqueia até autenticação, 2) EAP exchange via RADIUS, 3) se sucesso, authenticator abre porta. Dynamic VLAN assignment, MAB (MAC Authentication Bypass) para devices sem supplicant. EAP é foundation para enterprise Wi-Fi e NAC solutions (Cisco ISE, Aruba ClearPass).",
        "nivel": "base"
    },
    {
        "id": 110,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em JWT (JSON Web Tokens), qual dos três componentes contém as claims (informações) sobre o usuário?",
        "alternativas": [
            "Header",
            "Payload",
            "Signature",
            "Nonce"
        ],
        "respostaCorreta": 1,
        "explicacao": "JWT (RFC 7519) tem estrutura: Header.Payload.Signature (Base64URL encoded). Header: algoritmo (HS256, RS256) e tipo (JWT). Payload: claims (registered: iss, sub, aud, exp, iat; public; private). Signature: HMAC(secret, Header.Payload) ou RSA signature, garante integridade. JWT types: JWS (signed), JWE (encrypted). Claims comuns: sub (subject/user ID), iat (issued at), exp (expiration), aud (audience). JWT é stateless: server não mantém session, valida signature e claims. Use cases: authentication (access tokens), authorization (permissions in claims), information exchange. Security considerations: validate signature sempre, check exp, validate aud/iss, não armazenar dados sensíveis (payload é apenas Base64, não encrypted), usar HTTPS, short expiration. Refresh tokens (long-lived, opaque, revocable) complementam access tokens (short-lived JWT). Armazene JWT em httpOnly cookies ou memory, não localStorage (XSS vulnerable). Algorithm confusion attacks (RS256 vs HS256).",
        "nivel": "base"
    },
    {
        "id": 111,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual técnica criptográfica permite que múltiplas partes computem função conjuntamente sem revelar inputs individuais?",
        "alternativas": [
            "Secure Multi-Party Computation (MPC)",
            "Symmetric Encryption",
            "Public Key Infrastructure",
            "Hash Functions"
        ],
        "respostaCorreta": 0,
        "explicacao": "Secure Multi-Party Computation (MPC ou SMPC) permite n parties computar f(x1, x2, ..., xn) onde cada party conhece apenas seu xi, sem revelar inputs aos outros. Propriedades: privacy (nenhuma party aprende inputs alheios além do que output revela), correctness (output correto), independence (inputs não influenciados por outros). Técnicas: garbled circuits (Yao's protocol), secret sharing (Shamir), homomorphic encryption, oblivious transfer. Use cases: private bidding/auctions, private set intersection (encontrar interseção de datasets sem revelar elementos exclusivos), threshold cryptography (distributed key generation, signatures), secure voting, collaborative ML. Real-world: threshold signatures para crypto wallets (nenhum party tem chave completa), private contact tracing (COVID apps), data clean rooms (advertising analytics). Trade-offs: comunicação intensa, computação cara. MPC frameworks: SPDZ, MP-SPDZ, Sharemind. MPC é frontier para privacy-preserving computation.",
        "nivel": "base"
    },
    {
        "id": 112,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual ataque explora a reutilização de nonce em algoritmos como AES-GCM, comprometendo completamente a segurança?",
        "alternativas": [
            "Birthday Attack",
            "Nonce Reuse Attack",
            "Preimage Attack",
            "Length Extension Attack"
        ],
        "respostaCorreta": 1,
        "explicacao": "Nonce (Number used ONCE) deve ser único por mensagem com mesma chave. AES-GCM, ChaCha20-Poly1305, e outros AEAD modes são catastrophically broken com nonce reuse: atacante pode XOR dois ciphertexts para obter XOR dos plaintexts, recuperar authentication key, forge mensagens. AES-GCM usa CTR mode (keystream = encrypt(nonce || counter)), reuso revela keystream. Mitigation: usar nonces aleatórios de 96-bits (probabilidade collision baixa), ou counter-based nonces (garantir unicidade), ou nonce-misuse resistant schemes (AES-GCM-SIV, XChaCha20). TLS 1.3 usa implicit nonce (sequence number). Many real-world vulnerabilities: WPA2 KRACK (reuso de nonce), Forbidden Attack (Zyxel devices), Bluetooth. Golden rule: never reuse (key, nonce) pair. IV em CBC também não deve repetir mas consequências menos graves (leak plaintext patterns, não auth key). Lesson: crypto primitives têm requirements estritos; violações são catastrophic.",
        "nivel": "base"
    },
    {
        "id": 113,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em PKI, qual mecanismo permite verificar se certificado foi revogado sem consultar lista completa de revogação?",
        "alternativas": [
            "CRL (Certificate Revocation List)",
            "OCSP (Online Certificate Status Protocol)",
            "Certificate Pinning",
            "Trust Anchor"
        ],
        "respostaCorreta": 1,
        "explicacao": "OCSP (Online Certificate Status Protocol - RFC 6960) permite cliente consultar status de certificado específico: good, revoked, ou unknown. Cliente envia request com serial number do certificado para OCSP responder (geralmente operado por CA). Vantagens sobre CRL: resposta pequena e específica (vs baixar CRL inteira que pode ter megabytes), mais atualizado (real-time vs CRL periodic). OCSP Stapling (TLS Certificate Status Request extension): servidor obtém OCSP response assinada e inclui no TLS handshake, eliminando latência e carga no OCSP responder, melhorando privacy (cliente não revela quais sites visita à CA). Problemas OCSP: disponibilidade (se responder offline, fail-open ou fail-closed?), privacy leak (CA vê quais certificados estão sendo verificados), latência adicional. Certificate Transparency (CT logs) é mecanismo complementar. Modern browsers: verificação de revogação via CRLSets (Chrome), OneCRL (Firefox), ou OCSP Must-Staple.",
        "nivel": "base"
    },
    {
        "id": 114,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual tipo de ataque contra criptografia tenta todas as combinações possíveis de chaves até encontrar a correta?",
        "alternativas": [
            "Brute Force Attack",
            "Side-Channel Attack",
            "Man-in-the-Middle Attack",
            "Social Engineering"
        ],
        "respostaCorreta": 0,
        "explicacao": "Brute Force Attack tenta exaustivamente todas as chaves possíveis no keyspace. Tempo esperado: 2^(n-1) tentativas para n-bit key. AES-128: 2^128 = 3.4×10^38 keys, impossível com tecnologia atual (universo tem ~10^80 átomos). DES (56-bit): 2^56 = 7.2×10^16, quebrado em horas com hardware dedicado (Deep Crack, 1998). Mitigação: chaves longas suficientes (128-bit symmetric, 2048-bit RSA minimum), key derivation functions com salt e iterations (bcrypt, scrypt, Argon2) para passwords. Ataques práticos são mais inteligentes: dictionary attacks (senhas comuns), rainbow tables (precomputed hashes), cryptanalysis (explorar fraquezas do algoritmo). Quantum computing ameaça: Grover's algorithm reduz security de symmetric crypto pela metade (AES-128 → 64-bit effective), Shor's algorithm quebra RSA/ECC. Post-quantum cryptography usa problemas matemáticos diferentes. Defense: usar algoritmos bem-analisados, chaves longas, KDFs robustos.",
        "nivel": "base"
    },
    {
        "id": 115,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual propriedade de hash criptográfico significa que é computacionalmente inviável reverter o hash para obter a mensagem original?",
        "alternativas": [
            "Collision Resistance",
            "Preimage Resistance (One-Way Property)",
            "Deterministic",
            "Fast Computation"
        ],
        "respostaCorreta": 1,
        "explicacao": "Propriedades essenciais de hash criptográfico: 1) Preimage Resistance (one-way): dado hash h, impossível encontrar mensagem m tal que hash(m)=h. 2) Second Preimage Resistance: dado m1, impossível encontrar m2≠m1 tal que hash(m1)=hash(m2). 3) Collision Resistance: impossível encontrar quaisquer m1, m2 tal que hash(m1)=hash(m2). 4) Deterministic: mesma entrada sempre produz mesmo hash. 5) Avalanche Effect: pequena mudança na entrada altera drasticamente o hash. 6) Fixed Output Size. Preimage resistance é fundamental para: password hashing (armazenar hash, não plaintext), commitment schemes, proof of work. Diferenças: collision resistance é mais forte que preimage (birthday attack facilita collisions). Hash não é encryption: encryption é reversível com chave, hash é irreversível. Use SHA-256 ou SHA-3 para segurança. CRC32, MD5 não são cryptographic hashes.",
        "nivel": "base"
    },
    {
        "id": 116,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em VPN IPsec, qual protocolo fornece apenas autenticação e integridade, sem confidencialidade?",
        "alternativas": [
            "ESP (Encapsulating Security Payload)",
            "AH (Authentication Header)",
            "IKE (Internet Key Exchange)",
            "L2TP"
        ],
        "respostaCorreta": 1,
        "explicacao": "IPsec usa dois protocols: AH (Authentication Header, IP protocol 51) fornece autenticação de origem e integridade de dados, mas NÃO criptografia. AH protege: payload e parts do IP header (immutable fields), usando HMAC. ESP (Encapsulating Security Payload, IP protocol 50) fornece confidencialidade (encryption), autenticação e integridade. ESP é preferido pois AH: não atravessa NAT (protege IP header que NAT modifica), não fornece privacy, oferece proteção menor. ESP pode operar: com autenticação+encryption (padrão), ou apenas encryption (não recomendado), ou apenas autenticação (equivalente a AH, raro). IKE (UDP 500/4500) negocia SAs (Security Associations), não protege dados diretamente. Prática moderna: usar ESP com authenticated encryption (AES-GCM), Transport mode para host-to-host, Tunnel mode para site-to-site. AH está praticamente obsoleto, mantido para compatibilidade legada.",
        "nivel": "base"
    },
    {
        "id": 117,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual técnica permite validar integridade de software através de comparação com hash publicado pelo desenvolvedor?",
        "alternativas": [
            "File Checksum Verification (SHA-256 hash comparison)",
            "Antivirus Scanning",
            "Firewall Filtering",
            "IDS Detection"
        ],
        "respostaCorreta": 0,
        "explicacao": "Checksum/Hash Verification: desenvolvedor publica hash criptográfico (SHA-256) do software, usuário baixa software e calcula hash, compara com publicado. Match confirma: arquivo não foi alterado/corrompido, não há tampering. Processo: 'sha256sum file.iso' (Linux), 'Get-FileHash file.iso' (PowerShell). Hashes devem ser obtidos via canal seguro (HTTPS, assinados digitalmente). Limitação: se attacker compromete site e substitui tanto software quanto hash, não detecta. Code Signing é melhor: desenvolvedor assina software com private key, OS verifica signature com public key em certificado confiável. Windows SmartScreen, macOS Gatekeeper, Linux package managers usam signatures. Supply chain attacks mitigados por: code signing, reproducible builds, Software Bill of Materials (SBOM), transparency logs. Checksum simples (CRC, MD5) detecta corrupção mas não tampering malicioso. Use SHA-256+, verifique signatures quando disponíveis, use HTTPS para download.",
        "nivel": "base"
    },
    {
        "id": 118,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual esquema de criptografia permite buscar dados criptografados sem decriptá-los?",
        "alternativas": [
            "Searchable Encryption",
            "Stream Cipher",
            "Block Cipher",
            "Hash Function"
        ],
        "respostaCorreta": 0,
        "explicacao": "Searchable Encryption permite queries sobre dados criptografados sem revelar conteúdo ao servidor. Variantes: Symmetric Searchable Encryption (SSE, mesma entity cripta e busca), Public Key Encryption with Keyword Search (PEKS, diferentes entities). SSE: cliente cria encrypted index mapeando keywords para documents, envia search token ao servidor, servidor retorna matching encrypted documents, cliente decripta. Técnicas: inverted index encryption, oblivious data structures, secure indices. Trade-offs: funcionalidade limitada (exact match, não substring/regex/ranking complexo), vazamento de acesso patterns (quais documents foram acessados), performance overhead. Use cases: cloud storage privado (encrypt-before-upload), email encryption com search, medical records, legal discovery. Diferente de Homomorphic Encryption (computação arbitrária) e MPC, SE foca em search. Research: ORAM (Oblivious RAM) oculta access patterns. Implementações práticas são difíceis; maioria ainda research.",
        "nivel": "base"
    },
    {
        "id": 119,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Em blockchain, qual técnica permite agregar múltiplas assinaturas em uma única signature compacta, reduzindo tamanho de blocos?",
        "alternativas": [
            "Signature Aggregation (ex: BLS signatures, Schnorr)",
            "Hash Chaining",
            "Merkle Trees",
            "Public Key Encryption"
        ],
        "respostaCorreta": 0,
        "explicacao": "Signature Aggregation combina múltiplas signatures em single signature compacta. BLS (Boneh-Lynn-Shacham) signatures: n signatures podem ser agregadas em signature de tamanho constante (~48 bytes), verificáveis com single operation usando agregação de public keys. Benefícios: blockchains compactos (Bitcoin Taproot/Schnorr, Ethereum 2.0 Consensus), multisig eficiente, threshold signatures. Schnorr signatures (agora no Bitcoin) permitem signature aggregation via MuSig/MuSig2. Trade-offs: pairing-based crypto (BLS) é mais lento, requer curves específicas (BLS12-381). Aggregation vs multisig tradicional (multiple separate signatures). Use cases: Ethereum 2.0 beacon chain (validadores agregam attestations), Bitcoin Lightning Network, certificação eficiente. Threshold signatures (t-of-n) são relacionados mas diferentes (single signature que requer t parties, não aggregation de n signatures). Signature aggregation é optimization importante para blockchain scalability.",
        "nivel": "base"
    },
    {
        "id": 120,
        "categoria": "criptografia",
        "tipo": "multipla",
        "enunciado": "Qual protocolo de mensagens instantâneas implementa criptografia end-to-end com ratcheting, usado por Signal, WhatsApp e outros?",
        "alternativas": [
            "Signal Protocol (Double Ratchet Algorithm)",
            "PGP/GPG",
            "S/MIME",
            "Basic TLS"
        ],
        "respostaCorreta": 0,
        "explicacao": "Signal Protocol (Open Whisper Systems) fornece E2EE (end-to-end encryption) para messaging com: Perfect Forward Secrecy (chaves de sessão efêmeras), Post-Compromise Security (recuperação após key compromise via ratcheting), Authentication (X3DH key agreement), Asynchronous messaging (não requer ambas parties online). Core: Double Ratchet Algorithm (DH ratchet para key agreement + symmetric-key ratchet para message keys). X3DH (Extended Triple Diffie-Hellman) estabelece shared secret inicial. Cada mensagem tem chave única, compromisso de uma não afeta outras. Signal Protocol é usado por: Signal, WhatsApp, Facebook Messenger (secret conversations), Google Messages (RCS), Skype. Diferenças vs PGP: Signal tem PFS/ratcheting, é mais user-friendly. Diferenças vs TLS: Signal é E2E (server não pode decriptar), TLS é client-to-server. Auditado, open source, considerado gold standard para secure messaging. OMEMO é similar para XMPP.",
        "nivel": "base"
    },
    {
        "id": 121,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual ferramenta de linha de comando permite visualizar e modificar permissões NTFS de arquivos e pastas?",
        "alternativas": [
            "attrib",
            "icacls",
            "netstat",
            "ipconfig"
        ],
        "respostaCorreta": 1,
        "explicacao": "icacls (Integrity Control Access Control List) é utilitário Windows para gerenciar permissões NTFS via CLI. Comandos: 'icacls file.txt' (visualizar ACL), 'icacls folder /grant User:(OI)(CI)F' (conceder Full Control com herança para subpastas/arquivos), 'icacls file /remove User' (remover entrada ACL), 'icacls folder /inheritance:r' (desabilitar herança). Permissões NTFS: F = Full Control, M = Modify, RX = Read & Execute, R = Read, W = Write. Flags: (OI) = Object Inherit, (CI) = Container Inherit, (IO) = Inherit Only, (NP) = No Propagate. icacls substituiu cacls (deprecated). Alternativas GUI: Security tab em Properties, Advanced Security Settings. NTFS permissions são distintas de Share permissions. Effective permissions combinam ambas (mais restritiva). SID (Security Identifier) identifica principals. Use icacls para: automation (scripts), forensics, troubleshooting access issues, backup/restore ACLs (/save, /restore).",
        "nivel": "base"
    },
    {
        "id": 122,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite alternar para outro usuário ou executar comandos como superusuário?",
        "alternativas": [
            "chmod",
            "chown",
            "su (substitute user) ou sudo",
            "ps"
        ],
        "respostaCorreta": 2,
        "explicacao": "su (substitute user) e sudo (superuser do) permitem privilege escalation. su: 'su -' ou 'su - username' abre shell como outro user (solicita senha do target user), 'su -c command' executa comando único. sudo: 'sudo command' executa comando como root (solicita senha do current user), configurado em /etc/sudoers (use visudo para editar seguramente). sudoers permite: ALL permissions, specific commands, NOPASSWD, group-based (@group). Diferenças: su requer senha root (bad practice compartilhar), sudo é mais granular e auditável. Best practices: desabilitar root login direto, usar sudo com princípio de least privilege, configurar sudo timeout. sudo logs em /var/log/auth.log ou /var/log/secure. sudo -i ou sudo su - abre root shell. sudoedit edita files com privileges elevados. Alternativas: PolicyKit (pkexec) para GUI apps, Capabilities para granular permissions sem full root.",
        "nivel": "base"
    },
    {
        "id": 123,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual comando PowerShell permite listar todos os processos em execução no sistema?",
        "alternativas": [
            "Get-Service",
            "Get-Process",
            "Get-EventLog",
            "Get-NetAdapter"
        ],
        "respostaCorreta": 1,
        "explicacao": "Get-Process lista processos ativos com informações: ProcessName, Id (PID), CPU usage, Memory (WorkingSet), Handles, StartTime. Exemplos: 'Get-Process' (todos processos), 'Get-Process -Name chrome' (específico), 'Get-Process | Sort-Object CPU -Descending | Select-Object -First 10' (top 10 CPU consumers), 'Get-Process | Where-Object {$_.WorkingSet -gt 100MB}' (filtrar por memória). Stop-Process termina processo: 'Stop-Process -Name notepad' ou 'Stop-Process -Id 1234 -Force'. PowerShell oferece objetos ricos vs text parsing no CMD. Equivalente CMD: tasklist (listar), taskkill (terminar). Task Manager GUI mostra similar info. Performance Monitor e Resource Monitor oferecem análise detalhada. Get-Process pode monitorar remotamente: -ComputerName parameter. Forensics: analisar processos suspeitos, parent-child relationships, commandline arguments.",
        "nivel": "base"
    },
    {
        "id": 124,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual arquivo contém informações sobre usuários do sistema, incluindo username, UID, GID e shell padrão?",
        "alternativas": [
            "/etc/shadow",
            "/etc/group",
            "/etc/passwd",
            "/etc/hosts"
        ],
        "respostaCorreta": 2,
        "explicacao": "/etc/passwd contém informações de usuários em formato: username:x:UID:GID:GECOS:home_dir:shell. Exemplo: 'john:x:1001:1001:John Doe:/home/john:/bin/bash'. Campo 'x' indica senha em /etc/shadow. UID 0 = root, 1-999 = system users, 1000+ = regular users. /etc/shadow armazena hashes de senha (readable apenas por root): 'username:$6$salt$hash:lastchange:min:max:warn:inactive:expire:reserved'. Hash formats: $1$=MD5 (inseguro), $5$=SHA-256, $6$=SHA-512, $y$=yescrypt. /etc/group define grupos: 'groupname:x:GID:members'. Comandos: useradd, usermod, userdel, passwd, chage (password aging). id command mostra UID/GID. getent passwd consulta NSS (incluindo LDAP/AD). Security: shadow passwords previnem rainbow table attacks por separar hashes de /etc/passwd world-readable.",
        "nivel": "base"
    },
    {
        "id": 125,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual ferramenta nativa permite criar e gerenciar máquinas virtuais Hyper-V?",
        "alternativas": [
            "VMware Workstation",
            "VirtualBox",
            "Hyper-V Manager",
            "Docker Desktop"
        ],
        "respostaCorreta": 2,
        "explicacao": "Hyper-V é hypervisor Type-1 (bare-metal) da Microsoft, incluído em Windows 10/11 Pro/Enterprise e Windows Server. Hyper-V Manager (virtmgmt.msc) é GUI para gerenciar VMs. PowerShell: Get-VM, New-VM, Start-VM, Stop-VM, New-VHD, Set-VMMemory. Features: Generation 1 (BIOS) vs Gen 2 (UEFI, Secure Boot), Dynamic Memory, nested virtualization, Integration Services, checkpoints (snapshots), live migration, replication. Virtual switches: External (bridged), Internal (host-only), Private (isolated). Requisitos: Intel VT-x/AMD-V, SLAT (Second Level Address Translation), DEP. Hyper-V conflita com VirtualBox/VMware Workstation (compartilham hypervisor layer). WSL2 usa Hyper-V backend. Alternativa enterprise: System Center Virtual Machine Manager (SCVMM). Azure Stack HCI usa Hyper-V. Hyper-V vs VMware ESXi: ambos enterprise-grade, ESXi mais maduro, Hyper-V integrado com Windows ecosystem.",
        "nivel": "base"
    },
    {
        "id": 126,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando exibe o uso de espaço em disco por sistema de arquivos montado?",
        "alternativas": [
            "df (disk free)",
            "du (disk usage)",
            "mount",
            "fdisk"
        ],
        "respostaCorreta": 0,
        "explicacao": "df (disk free) mostra espaço usado/disponível por filesystem: 'df -h' (human-readable: GB/MB), 'df -i' (inodes), 'df -T' (filesystem type). Output: Filesystem, Size, Used, Avail, Use%, Mounted on. du (disk usage) mostra espaço por diretório/arquivo: 'du -sh /var/log' (summary), 'du -h --max-depth=1 /home | sort -hr' (sort por tamanho). Diferença: df analisa filesystems, du analisa arquivos. mount lista filesystems montados. Filesystem types: ext4 (default Linux), XFS (large files, RHEL default), Btrfs (CoW, snapshots), ZFS (advanced features), NTFS (Windows), FAT32/exFAT (cross-platform). Troubleshooting: '100% full' pode ser: inodes esgotados (df -i), open deleted files (lsof +L1), reserved blocks (tune2fs -m). ncdu é alternativa interativa para du.",
        "nivel": "base"
    },
    {
        "id": 127,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual registro (Registry) armazena configurações de máquina que se aplicam a todos os usuários?",
        "alternativas": [
            "HKEY_CURRENT_USER (HKCU)",
            "HKEY_LOCAL_MACHINE (HKLM)",
            "HKEY_CLASSES_ROOT (HKCR)",
            "HKEY_USERS (HKU)"
        ],
        "respostaCorreta": 1,
        "explicacao": "Windows Registry é database hierárquico de configurações. Hives principais: HKEY_LOCAL_MACHINE (HKLM): configurações machine-wide, software instalado, hardware, services, security policies. HKEY_CURRENT_USER (HKCU): configurações do user logado, preferências, software per-user. HKEY_CLASSES_ROOT (HKCR): file associations, COM objects. HKEY_USERS (HKU): todos user profiles, HKCU é link para HKU\\CurrentUserSID. HKEY_CURRENT_CONFIG: hardware profile atual. Registry files: C:\\Windows\\System32\\config (SYSTEM, SOFTWARE, SAM, SECURITY), C:\\Users\\username\\NTUSER.DAT (HKCU). Ferramentas: regedit (GUI), reg query/add/delete (CLI). Backup: 'reg export HKLM\\path file.reg'. Security: SAM (Security Account Manager) em HKLM\\SAM armazena hashes de senha local. Group Policy modifica registry. Forensics: registry contém evidence de programs executed, USB devices, network connections.",
        "nivel": "base"
    },
    {
        "id": 128,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite visualizar e configurar tabelas de roteamento IP?",
        "alternativas": [
            "ifconfig (deprecated)",
            "ip route ou route",
            "netstat -i",
            "hostname"
        ],
        "respostaCorreta": 1,
        "explicacao": "ip route (iproute2 package, moderno) ou route (net-tools, deprecated) gerenciam routing table. Comandos: 'ip route show' ou 'route -n' (exibir rotas), 'ip route add 192.168.2.0/24 via 192.168.1.1 dev eth0' (adicionar rota), 'ip route del 192.168.2.0/24' (remover), 'ip route add default via 192.168.1.1' (default gateway). Rotas persistentes: /etc/network/interfaces (Debian), /etc/sysconfig/network-scripts/route-eth0 (RHEL), NetworkManager, netplan (Ubuntu 18.04+). Routing table entries: destination, gateway, netmask, flags (U=up, G=gateway, H=host), metric, interface. Policy routing: ip rule, múltiplas routing tables. ip command é powerful: 'ip addr' (interfaces), 'ip link' (layer 2), 'ip neigh' (ARP), 'ip tunnel'. traceroute usa routing table. Bird/FRR para dynamic routing. iptables/nftables para packet filtering distinct from routing.",
        "nivel": "base"
    },
    {
        "id": 129,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual componente gerencia autenticação de usuários e políticas de segurança em domínio?",
        "alternativas": [
            "Workgroup",
            "Active Directory Domain Services (AD DS)",
            "HomeGroup",
            "Local Users and Groups"
        ],
        "respostaCorreta": 1,
        "explicacao": "Active Directory Domain Services (AD DS) é serviço de diretório Microsoft para autenticação centralizada, autorização, e gerenciamento de recursos em rede Windows. Componentes: Domain Controllers (DCs, servidores AD), Domains (boundary administrativa), Trees (hierarquia de domains), Forest (coleção de trees), Organizational Units (OUs, containers para objetos), Global Catalog (índice searchable). Protocolos: Kerberos (autenticação), LDAP (queries), DNS (service location), SMB/CIFS (file sharing), RPC. Objects: Users, Computers, Groups (Security, Distribution), Group Policy Objects (GPOs). GPOs aplicam configurações: password policies, software deployment, drive mapping, registry settings, security settings. FSMO roles: Schema Master, Domain Naming Master, RID Master, PDC Emulator, Infrastructure Master. Replication: multi-master entre DCs. Sites & Services para replication topology. Azure AD é cloud-based, diferente de on-premises AD DS.",
        "nivel": "base"
    },
    {
        "id": 130,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual sistema de gerenciamento de serviços substituiu SysVinit na maioria das distribuições modernas?",
        "alternativas": [
            "Upstart",
            "systemd",
            "OpenRC",
            "runit"
        ],
        "respostaCorreta": 1,
        "explicacao": "systemd é system and service manager, padrão em: Ubuntu (15.04+), Debian (8+), RHEL/CentOS (7+), Fedora, Arch, SUSE. Benefícios: paralelização (boot rápido), dependency-based startup, socket/D-Bus activation, cgroups para resource control, unified logging (journalctl), timer units (substitui cron). Comandos: systemctl start/stop/restart/enable/disable service, systemctl status service, systemctl list-units, systemctl daemon-reload (recarregar configs). Unit types: .service (daemons), .socket, .device, .mount, .timer, .target (runlevel equivalente). Unit files: /lib/systemd/system (package-provided), /etc/systemd/system (admin overrides). journalctl: 'journalctl -u service', 'journalctl -f' (follow), 'journalctl --since today', 'journalctl -p err' (priority). Controvérsias: scope creep, binary logs, complexity. Alternativas: OpenRC (Gentoo), runit (Void Linux), Upstart (Ubuntu legacy). systemd-analyze blame mostra boot time por service.",
        "nivel": "base"
    },
    {
        "id": 131,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual ferramenta permite monitorar performance em tempo real, incluindo CPU, memória, disco e rede?",
        "alternativas": [
            "Event Viewer",
            "Performance Monitor (perfmon) / Resource Monitor",
            "Device Manager",
            "Disk Management"
        ],
        "respostaCorreta": 1,
        "explicacao": "Performance Monitor (perfmon.msc) coleta performance data via counters: Processor (% Processor Time), Memory (Available MBytes, Pages/sec), PhysicalDisk (Avg. Disk Queue Length, % Disk Time), Network Interface (Bytes Total/sec). Features: real-time monitoring, Data Collector Sets (logging), Performance Counter Alerts, Reports. Resource Monitor (resmon) mostra detalhes: per-process CPU, Memory (Working Set, commit), Disk I/O (read/write bytes), Network (TCP connections, listening ports). Task Manager (taskmgr) oferece overview rápido. Reliability Monitor (perfmon /rel) mostra historical stability. Windows Performance Toolkit (WPR, WPA) para advanced profiling. Sysinternals: Process Explorer (detailed process info), Process Monitor (real-time file/registry/network monitoring), RAMMap (memory analysis). Sysmon (System Monitor) logs detailed events para SIEM. Performance Counters úteis para troubleshooting: high CPU, memory leaks, disk bottlenecks, network saturation.",
        "nivel": "base"
    },
    {
        "id": 132,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite buscar arquivos no sistema de arquivos baseado em critérios como nome, tamanho ou data de modificação?",
        "alternativas": [
            "grep",
            "find",
            "locate",
            "which"
        ],
        "respostaCorreta": 1,
        "explicacao": "find busca recursivamente em diretórios: 'find /var/log -name '*.log'' (por nome), 'find /home -user john' (por owner), 'find / -size +100M' (maiores que 100MB), 'find /tmp -mtime +7' (modificados há mais de 7 dias), 'find / -type f -perm 777' (permissões específicas). Actions: -exec (executar comando), -delete (remover), -print (default). Exemplos: 'find /var/log -name '*.log' -mtime +30 -delete' (limpar logs antigos), 'find / -type f -name '*.conf' -exec grep -l 'password' {} \\;' (buscar password em configs). locate é mais rápido (usa database updatedb), mas menos atual: 'locate filename'. which encontra executável no PATH: 'which python3'. whereis localiza binary, source, man pages. Alternativas: fd (find moderno, Rust), fzf (fuzzy finder). find é essencial para: system administration, forensics, cleanup scripts. Performance: find pode ser lento em filesystems grandes; locate é instant mas requer updatedb scheduled.",
        "nivel": "base"
    },
    {
        "id": 133,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual comando verifica e repara integridade de arquivos do sistema?",
        "alternativas": [
            "chkdsk",
            "sfc /scannow (System File Checker)",
            "defrag",
            "diskpart"
        ],
        "respostaCorreta": 1,
        "explicacao": "sfc (System File Checker) verifica integridade de system files protegidos e os repara: 'sfc /scannow' (scan completo, requer admin), 'sfc /verifyonly' (apenas verifica). SFC usa Windows Resource Protection (WRP) e compara com cache em C:\\Windows\\WinSxS. Log: C:\\Windows\\Logs\\CBS\\CBS.log. DISM (Deployment Image Servicing and Management) repara Windows image: 'DISM /Online /Cleanup-Image /RestoreHealth' (download de Windows Update), 'DISM /Online /Cleanup-Image /ScanHealth' (verificar), run DISM antes de SFC se SFC falhar. chkdsk verifica filesystem integrity (bad sectors, lost chains): 'chkdsk C: /f /r' (/f fix errors, /r locate bad sectors). Troubleshooting: corrupted system files causam: crashes, errors, boot issues. Windows Update ou malware podem corromper files. Combine SFC + DISM para repair. Clean install é último recurso.",
        "nivel": "base"
    },
    {
        "id": 134,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite comprimir e arquivar múltiplos arquivos em um único arquivo .tar.gz?",
        "alternativas": [
            "zip",
            "tar -czf archive.tar.gz files",
            "gzip",
            "rar"
        ],
        "respostaCorreta": 1,
        "explicacao": "tar (tape archive) agrupa arquivos; compression separada via gzip/bzip2/xz. Comandos: 'tar -czf archive.tar.gz /path' (create gzip compressed), 'tar -cjf archive.tar.bz2 /path' (bzip2, maior compressão), 'tar -cJf archive.tar.xz /path' (xz, melhor compressão), 'tar -xzf archive.tar.gz' (extract gzip), 'tar -xzf archive.tar.gz -C /destination' (extract para destino), 'tar -tzf archive.tar.gz' (list contents). Flags: c=create, x=extract, z=gzip, j=bzip2, J=xz, f=file, v=verbose, t=list. gzip comprime single file: 'gzip file' (cria file.gz), 'gunzip file.gz' (descomprime). zip é cross-platform: 'zip -r archive.zip /path', 'unzip archive.zip'. 7z oferece melhor compressão. Alternativas: rar (proprietário), pigz (parallel gzip), pv (progress viewer): 'tar -czf - /path | pv > archive.tar.gz'. tar é standard para distribuir software source code e backups.",
        "nivel": "base"
    },
    {
        "id": 135,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual política de Group Policy pode ser usada para restringir execução de software não autorizado?",
        "alternativas": [
            "AppLocker ou Software Restriction Policies",
            "User Account Control (UAC)",
            "Windows Defender",
            "BitLocker"
        ],
        "respostaCorreta": 0,
        "explicacao": "AppLocker (Windows 7+) controla quais aplicações podem executar baseado em: publisher (certificado digital), path (location no filesystem), file hash. Rules por: executable (.exe, .com), Windows Installer (.msi, .msp), scripts (.ps1, .bat, .vbs, .js), packaged apps (AppX). Modos: Audit (log apenas), Enforce (bloquear). Default rules permitem: administradores executar tudo, users executar de Program Files e Windows. Software Restriction Policies (SRP, legacy, XP+) é predecessor, menos granular. AppLocker benefícios: granular control, auditoria detalhada, suporta exceptions. Deployment: via GPO, local security policy. Use cases: prevenir malware execution, compliance (only approved software), zero trust. Bypass potencial: PowerShell, MSBuild, regsvr32 (application whitelisting evasion). Combine com: Credential Guard, Device Guard, Windows Defender Application Control (WDAC, enterprise). Alternative: third-party application whitelisting solutions.",
        "nivel": "base"
    },
    {
        "id": 136,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual mecanismo de controle de acesso obrigatório (MAC) fornece policies de segurança granulares além das permissões tradicionais?",
        "alternativas": [
            "Discretionary Access Control (DAC)",
            "SELinux (Security-Enhanced Linux) ou AppArmor",
            "sudo",
            "chmod"
        ],
        "respostaCorreta": 1,
        "explicacao": "SELinux (Security-Enhanced Linux, NSA) e AppArmor são Mandatory Access Control (MAC) systems que impõem policies além de DAC (permissions tradicionais). SELinux: label-based (contexts: user:role:type:level), policies definem permitido/denied por type enforcement, Multi-Level Security (MLS) para classificações. Modes: Enforcing (block violations), Permissive (log apenas), Disabled. Commands: getenforce, setenforce, sestatus, chcon (change context), restorecon, audit2allow (gerar policy de logs). SELinux default em RHEL/CentOS/Fedora. AppArmor: path-based, profiles definem acessos permitidos por application, mais simples que SELinux. Default em Ubuntu/Debian/SUSE. Commands: apparmor_status, aa-enforce, aa-complain. Benefits: confine daemons (Apache, MySQL), prevenir privilege escalation, limit damage de vulnerabilities. Troubleshooting: check /var/log/audit/audit.log (SELinux) ou /var/log/syslog (AppArmor). Disable cautelosamente (apenas temporariamente para troubleshoot).",
        "nivel": "base"
    },
    {
        "id": 137,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual serviço gerencia tarefas agendadas e automação de scripts?",
        "alternativas": [
            "Task Scheduler",
            "Windows Update",
            "Print Spooler",
            "Remote Desktop Services"
        ],
        "respostaCorreta": 0,
        "explicacao": "Task Scheduler (taskschd.msc) agenda execução de: programs, scripts (PowerShell, batch), ações em triggers: tempo (daily, weekly, once), eventos (logon, startup, event log entry), conditions (idle, network). Components: Triggers, Actions (start program, send email, display message), Conditions (idle, power, network), Settings (restart on failure, stop if runs too long). CLI: schtasks: 'schtasks /create /tn TaskName /tr C:\\script.bat /sc daily /st 09:00', 'schtasks /query', 'schtasks /delete /tn TaskName'. PowerShell: Get-ScheduledTask, Register-ScheduledTask, Start-ScheduledTask. Security: tasks run com privileges configuradas (user account, SYSTEM), at.exe (deprecated) permitia privilege escalation. Use cases: backups, maintenance scripts, log rotation, monitoring. Tasks maliciosas: attackers usam persistence (scheduled task backdoor). Audit: Security event log, Task Scheduler logs. Alternatives: Windows Services (continuous run), Startup folder (boot time execution).",
        "nivel": "base"
    },
    {
        "id": 138,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite editar arquivos de texto diretamente no terminal?",
        "alternativas": [
            "vi/vim ou nano",
            "cat",
            "less",
            "head"
        ],
        "respostaCorreta": 0,
        "explicacao": "Editores de texto CLI: vim (Vi IMproved, powerful, steep learning curve), nano (user-friendly, simples), emacs (extensível, IDE-like). vim: modes: Normal (navegação, comandos), Insert (edição), Visual (seleção), Command (:wq salvar e sair, :q! sair sem salvar). Commands: i (insert), dd (delete line), yy (yank/copy), p (paste), /search, :%s/old/new/g (replace). vimtutor ensina basics. nano: ^O (save), ^X (exit), ^W (search), ^K (cut), ^U (paste), user-friendly para beginners. emacs: C-x C-s (save), C-x C-c (exit), extensive customization. cat concatena/exibe files (read-only). less/more paginam output (navigation, read-only). head/tail mostram início/fim de file. Use cases: system administration (editing configs), development (lightweight), remote servers (GUI não disponível). Alternatives: GUI editors: gedit, kate, VSCode (remote SSH extension).",
        "nivel": "base"
    },
    {
        "id": 139,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual protocolo permite execução remota de comandos PowerShell em máquinas da rede?",
        "alternativas": [
            "Telnet",
            "FTP",
            "PowerShell Remoting (WS-Management / WinRM)",
            "HTTP"
        ],
        "respostaCorreta": 2,
        "explicacao": "PowerShell Remoting usa WinRM (Windows Remote Management, implementação Microsoft de WS-Management protocol) sobre HTTP (5985) ou HTTPS (5986). Setup: 'Enable-PSRemoting' (configura WinRM, firewall rules). One-to-One: 'Enter-PSSession -ComputerName Server01' (interactive session), 'Exit-PSSession'. One-to-Many: 'Invoke-Command -ComputerName Server01,Server02 -ScriptBlock {Get-Process}' (executa comando em múltiplos servers). Sessions persistentes: '$session = New-PSSession -ComputerName Server01', 'Invoke-Command -Session $session -ScriptBlock {...}'. Authentication: Kerberos (domain), NTLM (workgroup), CredSSP (second-hop), certificate-based. DoubleHop problem: credentials não passam além de first remote hop (use CredSSP cautelosamente ou Resource-based Kerberos constrained delegation). Security: TrustedHosts, HTTPS, JEA (Just Enough Administration) para princípio de least privilege. Alternative: SSH remoting (PowerShell 7+, cross-platform).",
        "nivel": "base"
    },
    {
        "id": 140,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual diretório contém arquivos de configuração do sistema e aplicações?",
        "alternativas": [
            "/home",
            "/etc",
            "/var",
            "/tmp"
        ],
        "respostaCorreta": 1,
        "explicacao": "Filesystem Hierarchy Standard (FHS) define estrutura Linux: /etc: configuration files (system-wide), format geralmente text (editable). Exemplos: /etc/passwd, /etc/shadow, /etc/group, /etc/fstab (filesystems), /etc/hosts, /etc/resolv.conf (DNS), /etc/ssh/sshd_config, /etc/apache2/, /etc/network/interfaces. /home: user home directories (/home/username). /var: variable data (logs, spool, cache): /var/log (system logs), /var/spool (print/mail queues), /var/www (web content). /tmp: temporary files (cleared on boot). /bin: essential binaries. /sbin: system binaries. /usr: user programs (/usr/bin, /usr/local). /opt: optional/add-on software. /proc: virtual filesystem (process info, kernel). /sys: virtual filesystem (device/driver info). /dev: device files. /boot: boot loader, kernel. /lib: shared libraries. /root: root user home. Permissions: /etc readable by all, writable apenas por root. Backup /etc para disaster recovery.",
        "nivel": "base"
    },
    {
        "id": 141,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual ferramenta exibe logs de eventos do sistema, segurança, e aplicações?",
        "alternativas": [
            "Task Manager",
            "Event Viewer (eventvwr.msc)",
            "Registry Editor",
            "Services (services.msc)"
        ],
        "respostaCorreta": 1,
        "explicacao": "Event Viewer (eventvwr.msc) centraliza Windows logs: Windows Logs: Application (app errors/warnings), Security (audit events: logon, privilege use, object access), Setup (installation), System (driver, service, OS component events). Event properties: Source, Event ID, Level (Information, Warning, Error, Critical), Timestamp, User. Applications and Services Logs: specific apps/roles (PowerShell, Microsoft-Windows-*). Custom Views: filter across multiple logs. PowerShell: Get-EventLog (legacy), Get-WinEvent (modern): 'Get-WinEvent -LogName Security -FilterHashtable @{ID=4624}' (logons). Forwarding: configure Event Subscriptions (centralized logging). SIEM integration: Sysmon (enhanced logging), Winlogbeat (Elastic), Splunk Universal Forwarder. Common Event IDs: 4624 (logon), 4625 (failed logon), 4672 (special privileges), 7045 (service installed). Log sizes configuráveis; archive old logs para forensics.",
        "nivel": "base"
    },
    {
        "id": 142,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite visualizar processos em execução de forma interativa e atualizada?",
        "alternativas": [
            "ps",
            "top ou htop",
            "kill",
            "nice"
        ],
        "respostaCorreta": 1,
        "explicacao": "top exibe processos real-time: CPU%, MEM%, command. Interface: sorting (P=CPU, M=memory), k=kill process, r=renice. htop (enhanced): colors, mouse support, tree view, easier filtering/killing. Alternatives: atop (advanced logging), glances (cross-platform, Python). ps: snapshot de processos: 'ps aux' (all processes), 'ps -ef' (full format), 'ps -u username' (por user). Fields: PID, %CPU, %MEM, VSZ (virtual memory), RSS (resident memory), TIME (CPU time), STAT (state: R=running, S=sleeping, Z=zombie, D=uninterruptible sleep). Process states: D state indica I/O wait (troubleshoot disk/network bottleneck). pstree mostra hierarchy. pgrep encontra PID por name: 'pgrep httpd'. kill envia signals: 'kill -9 PID' (SIGKILL, force), 'kill -15 PID' (SIGTERM, graceful), 'killall process_name', 'pkill -f pattern'. nice/renice ajustam priority (-20 highest, 19 lowest).",
        "nivel": "base"
    },
    {
        "id": 143,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual comando de rede exibe estatísticas de conexões TCP/IP, portas listening e tabela de roteamento?",
        "alternativas": [
            "ipconfig",
            "netstat",
            "nslookup",
            "tracert"
        ],
        "respostaCorreta": 1,
        "explicacao": "netstat (network statistics) exibe: conexões ativas ('netstat -ano': all connections, numeric addresses, owning PID), listening ports ('netstat -an | find \"LISTEN\"'), routing table ('netstat -r'), interface statistics ('netstat -e'). Flags: -a (all), -n (numeric, sem DNS lookup), -o (PID), -b (executable, requires admin), -p tcp/udp (protocol), -f (FQDN). Use cases: identify processes listening on ports (combine com tasklist: 'tasklist /fi \"PID eq 1234\"'), troubleshoot connections, detect malware (suspicious connections). PowerShell alternatives: Get-NetTCPConnection, Get-NetUDPEndpoint (filterable objects). TCPView (Sysinternals) é GUI alternative. Linux equivalent: 'netstat -tulpn', 'ss -tulpn' (socket statistics, faster). Troubleshooting: FIN_WAIT, TIME_WAIT states normais; CLOSE_WAIT indica app não fechando sockets properly.",
        "nivel": "base"
    },
    {
        "id": 144,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite monitorar logs do sistema em tempo real?",
        "alternativas": [
            "tail -f /var/log/syslog",
            "cat /var/log/syslog",
            "head /var/log/syslog",
            "grep syslog"
        ],
        "respostaCorreta": 0,
        "explicacao": "tail -f (follow) monitora arquivo em real-time: 'tail -f /var/log/syslog', 'tail -f /var/log/apache2/error.log'. tail -n 100 /var/log/file mostra últimas 100 linhas. Logs comuns: /var/log/syslog (Debian/Ubuntu), /var/log/messages (RHEL/CentOS), /var/log/auth.log (authentication), /var/log/kern.log (kernel), /var/log/daemon.log, /var/log/apache2/, /var/log/nginx/. journalctl (systemd): 'journalctl -f' (follow), 'journalctl -u service' (specific service), 'journalctl --since \"2023-01-01\" --until \"2023-01-02\"', 'journalctl -p err' (priority). multitail monitora múltiplos logs simultaneamente. less +F file (follow mode, F para toggle). grep filtra logs: 'grep ERROR /var/log/syslog'. Logrotate gerencia rotation (compress, delete old). Centralized logging: rsyslog, syslog-ng forward para SIEM. Tools: goaccess (web log analyzer), lnav (log navigator).",
        "nivel": "base"
    },
    {
        "id": 145,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual recurso permite criar snapshots do estado atual do sistema para rollback em caso de problemas?",
        "alternativas": [
            "File History",
            "System Restore (System Protection)",
            "Windows Backup",
            "Shadow Copies"
        ],
        "respostaCorreta": 1,
        "explicacao": "System Restore cria restore points: snapshots de system files, registry, installed programs (não user files). Criação: automática (Windows Update, driver installation), manual (rstrui.exe). Restore: boot to Safe Mode ou WinRE (Windows Recovery Environment), revert system changes. System Protection deve estar enabled (System Properties > System Protection). Storage: VSS (Volume Shadow Copy Service) armazena previous versions. File History (Windows 8+) backups user files para external drive. Windows Backup (wbadmin) é complete system backup. Shadow Copies (VSS) permitem recovery de previous versions de files/folders (Right-click > Properties > Previous Versions). Use cases: undo problematic updates, driver rollback, malware recovery. Limitations: não garante recovery de malware persistence em user profile; combine com antivirus. VSSADMIN lista shadow copies. Hyper-V/VMware snapshots são diferentes (VM-level).",
        "nivel": "base"
    },
    {
        "id": 146,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite gerenciar pacotes de software em distribuições baseadas em Debian (como Ubuntu)?",
        "alternativas": [
            "yum",
            "rpm",
            "apt ou apt-get",
            "pacman"
        ],
        "respostaCorreta": 2,
        "explicacao": "Package managers Linux: Debian-based (Debian, Ubuntu, Mint): apt/apt-get (front-end), dpkg (low-level). Commands: 'apt update' (atualiza package lists), 'apt upgrade' (atualiza packages), 'apt install package', 'apt remove package', 'apt search keyword', 'apt show package', 'apt autoremove' (remove unused dependencies). dpkg: 'dpkg -i package.deb' (install local), 'dpkg -l' (list installed), 'dpkg -r package' (remove). RHEL-based (RHEL, CentOS, Fedora): yum (legacy), dnf (modern). Commands: 'dnf install', 'dnf update', 'dnf remove', 'dnf search'. rpm: 'rpm -ivh package.rpm' (install), 'rpm -qa' (list). Arch Linux: pacman: 'pacman -S package', 'pacman -Syu' (full system upgrade). Package formats: .deb (Debian), .rpm (Red Hat). Repositories: /etc/apt/sources.list (Debian), /etc/yum.repos.d/ (RHEL). PPAs (Personal Package Archives) adiciona third-party repositories (Ubuntu).",
        "nivel": "base"
    },
    {
        "id": 147,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual política de senha pode ser configurada via Group Policy para aumentar segurança?",
        "alternativas": [
            "Complexidade de senha, comprimento mínimo, histórico e expiração",
            "Apenas comprimento mínimo",
            "Não há políticas de senha",
            "Apenas expiração"
        ],
        "respostaCorreta": 0,
        "explicacao": "Password Policy (GPO: Computer Configuration > Policies > Windows Settings > Security Settings > Account Policies > Password Policy): Enforce password history (previne reuso, default 24), Maximum password age (expiration, 42 days default), Minimum password age (previne mudanças rápidas, 1 day), Minimum password length (8+ recomendado, 14+ para high-security), Password must meet complexity requirements (uppercase, lowercase, digit, special char, not username), Store passwords using reversible encryption (não use, equivalente a plaintext). Account Lockout Policy: threshold (tentativas antes de lockout), duration, reset timer. Fine-Grained Password Policies (FGPP) permite diferentes policies por OU/group. Best practices: 12-16 char minimum, complexity, sem expiration forçada (NIST 800-63B), MFA, monitor brute-force (Event ID 4625). Alternatives: Azure AD Password Protection (block common passwords), passwordless (Windows Hello, FIDO2).",
        "nivel": "base"
    },
    {
        "id": 148,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite alterar permissões de arquivos e diretórios usando notação octal ou simbólica?",
        "alternativas": [
            "chmod",
            "chown",
            "chgrp",
            "umask"
        ],
        "respostaCorreta": 0,
        "explicacao": "chmod (change mode) altera permissões: read (r/4), write (w/2), execute (x/1) para owner, group, others. Octal: 'chmod 755 file' (rwxr-xr-x: owner full, group/others read+execute). Symbolic: 'chmod u+x file' (add execute para user), 'chmod go-w file' (remove write de group/others), 'chmod a=r file' (set all to read-only). Special permissions: SUID (4000, executa como owner): 'chmod u+s file', SGID (2000, herda group): 'chmod g+s dir', Sticky bit (1000, apenas owner pode deletar em /tmp): 'chmod +t dir'. Recursive: 'chmod -R 644 /path'. chown muda owner: 'chown user:group file', 'chown -R user:group /path'. chgrp muda group: 'chgrp group file'. umask define default permissions para novos files (umask 022 → files 644, dirs 755). ls -l mostra permissions. ACLs (getfacl, setfacl) permissões avançadas além de rwx.",
        "nivel": "base"
    },
    {
        "id": 149,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual mecanismo protege arquivos e pastas críticos do sistema contra modificação não autorizada?",
        "alternativas": [
            "User Account Control (UAC)",
            "Windows Resource Protection (WRP)",
            "BitLocker",
            "Windows Defender"
        ],
        "respostaCorreta": 1,
        "explicacao": "Windows Resource Protection (WRP, anteriormente Windows File Protection) protege critical system files, folders, registry keys contra modificação. Protected resources têm ACLs especiais: apenas TrustedInstaller (service account) tem write access. Proteção contra: malware, software mal comportado, user errors. sfc /scannow usa WRP para verificar/reparar. TrustedInstaller ownership visível em: C:\\Windows\\System32\\*, registry HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\*. UAC prompts privilege elevation, complementar a WRP. Change ownership: takeown, icacls (requer admin, pode quebrar system se feito incorretamente). WRP substituiu WFP do XP (SFC populava cache de DLL cache). Modern Windows: Controlled Folder Access (ransomware protection), Attack Surface Reduction (ASR) rules. Lesson: não desabilitar WRP/UAC; security-in-depth é crítico.",
        "nivel": "base"
    },
    {
        "id": 150,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite copiar arquivos e diretórios, preservando atributos e permissões?",
        "alternativas": [
            "mv",
            "cp -p ou cp -a",
            "rm",
            "ln"
        ],
        "respostaCorreta": 1,
        "explicacao": "cp (copy): 'cp source dest' (copy file), 'cp -r source_dir/ dest_dir/' (recursive, para directories). Preservation flags: -p (preserve mode, ownership, timestamps), -a (archive mode = -dR --preserve=all, mantém symlinks, attributes), -i (interactive, prompt antes de overwrite), -u (update, copy apenas se source é newer), -v (verbose). Examples: 'cp -a /etc/config /backup/' (backup preserving all attributes), 'cp -p file.txt file_backup.txt'. mv move/rename: 'mv old new'. rm remove: 'rm file', 'rm -r dir', 'rm -f' (force, sem prompt). ln cria links: 'ln -s target linkname' (symbolic link), 'ln target linkname' (hard link). rsync é alternativa poderosa: 'rsync -avz /source/ /dest/' (archive, verbose, compress, network-aware, incremental). scp/sftp para remote copy. dd para low-level copy (disk images). Permissions requerem: read source, write destination. sudo se necessário.",
        "nivel": "base"
    },
    {
        "id": 151,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual ferramenta permite diagnosticar problemas de rede, incluindo testes de conectividade e análise de configuração?",
        "alternativas": [
            "Network Diagnostic Tool ou ping/tracert/pathping",
            "Disk Cleanup",
            "Defragment",
            "System Restore"
        ],
        "respostaCorreta": 0,
        "explicacao": "Network troubleshooting tools Windows: ping: testa reachability ICMP: 'ping 8.8.8.8', 'ping google.com'. tracert: traça rota: 'tracert google.com' (lista hops). pathping: combina ping+tracert com statistics: 'pathping google.com' (packet loss por hop). nslookup: DNS queries: 'nslookup google.com', 'nslookup google.com 8.8.8.8' (specific DNS server). ipconfig: interface info: 'ipconfig /all' (detailed), 'ipconfig /flushdns' (clear cache), 'ipconfig /release', 'ipconfig /renew' (DHCP). route: routing table: 'route print'. arp: ARP cache: 'arp -a'. Test-NetConnection (PowerShell): 'Test-NetConnection -ComputerName google.com -Port 443' (test specific port). Network Diagnostic Tool (GUI): Windows Network Diagnostics wizard. Wireshark: packet capture. Advanced: Network Monitor (Microsoft), TCPView, Fiddler (HTTP proxy). Troubleshooting flow: ping localhost (127.0.0.1) → default gateway → external IP → DNS.",
        "nivel": "base"
    },
    {
        "id": 152,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual arquivo contém a configuração de resolução DNS, especificando servidores DNS?",
        "alternativas": [
            "/etc/hosts",
            "/etc/hostname",
            "/etc/resolv.conf",
            "/etc/network/interfaces"
        ],
        "respostaCorreta": 2,
        "explicacao": "/etc/resolv.conf configura DNS resolution: 'nameserver 8.8.8.8' (Google DNS), 'nameserver 1.1.1.1' (Cloudflare), 'search example.com' (domain suffix), 'options timeout:2 attempts:3'. Máximo 3 nameservers lidos. systemd-resolved (Ubuntu 18.04+, systemd distros) gerencia DNS dinamicamente: /etc/resolv.conf é symlink para /run/systemd/resolve/stub-resolv.conf. Commands: 'resolvectl status', 'resolvectl query google.com'. NetworkManager pode sobrescrever resolv.conf. Persistent config: /etc/systemd/resolved.conf, NetworkManager connection profiles, /etc/network/interfaces (Debian). /etc/hosts: static hostname-to-IP mapping (consulted antes de DNS): '192.168.1.10 server.local'. /etc/hostname: system hostname. /etc/nsswitch.conf: order de name resolution (files, dns, mdns). Testing: 'dig google.com', 'nslookup google.com', 'host google.com'. Troubleshooting: verify resolv.conf, test DNS server reachability, check firewall (UDP 53).",
        "nivel": "base"
    },
    {
        "id": 153,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual comando PowerShell retorna informações detalhadas sobre adaptadores de rede?",
        "alternativas": [
            "Get-NetAdapter",
            "Get-Service",
            "Get-Process",
            "Get-EventLog"
        ],
        "respostaCorreta": 0,
        "explicacao": "Get-NetAdapter lista network adapters: Name, InterfaceDescription, ifIndex, Status (Up/Down), MacAddress, LinkSpeed. Examples: 'Get-NetAdapter | Where-Object {$_.Status -eq \"Up\"}' (apenas ativos), 'Get-NetAdapter -Name Ethernet0 | Format-List *' (detalhes completos), 'Get-NetAdapter | Select-Object Name, Status, LinkSpeed'. Related cmdlets: Get-NetIPAddress (IP config), Get-NetIPConfiguration (combined info), Get-NetRoute (routing table), Get-NetTCPConnection (connections), Test-NetConnection (connectivity test), Set-NetIPAddress (configure IP), Enable-NetAdapter, Disable-NetAdapter, Restart-NetAdapter. GUI equivalent: ncpa.cpl (Network Connections), Control Panel > Network and Sharing Center. ipconfig é legacy CLI. PowerShell NetTCPIP module oferece comprehensive network management. Troubleshooting: verify adapter enabled/disabled, check drivers (Get-NetAdapterDriver), link speed (mismatch indica duplex/speed config issue).",
        "nivel": "base"
    },
    {
        "id": 154,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual sistema de arquivos com journaling é o padrão na maioria das distribuições modernas?",
        "alternativas": [
            "FAT32",
            "NTFS",
            "ext4 (Fourth Extended Filesystem)",
            "ISO9660"
        ],
        "respostaCorreta": 2,
        "explicacao": "ext4 (2008) é default Linux filesystem em Debian, Ubuntu, RHEL 7+, Fedora. Features: journaling (recovery rápido após crash), extents (melhor performance para large files), delayed allocation, backwards compatible com ext2/ext3, max file size 16TB, max filesystem size 1EB. Alternativas: XFS (RHEL 8+ default, scalable, large files, não permite shrinking), Btrfs (CoW, snapshots, compression, RAID, subvolumes, ainda maturing), ZFS (advanced features, licensing issues no Linux), F2FS (Flash-Friendly, SSDs/eMMC). Legacy: ext2 (sem journaling), ext3 (journaling simples). Filesystem comparison: ext4 mature/stable, XFS high-performance, Btrfs feature-rich mas complex. Formatting: 'mkfs.ext4 /dev/sdb1'. Check: 'fsck.ext4 /dev/sdb1' (unmounted). Tuning: tune2fs ajusta parameters (reserved blocks, max mount count). Mount options: noatime (performance), barrier (flush semantics).",
        "nivel": "base"
    },
    {
        "id": 155,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual comando permite fazer backup e restaurar drivers de dispositivos?",
        "alternativas": [
            "driverquery e pnputil",
            "sfc /scannow",
            "chkdsk",
            "diskpart"
        ],
        "respostaCorreta": 0,
        "explicacao": "Driver management Windows: driverquery: lista installed drivers: 'driverquery /v' (verbose), 'driverquery /fo csv > drivers.csv' (export). pnputil: gerencia driver store: 'pnputil /enum-drivers' (list third-party drivers), 'pnputil /add-driver C:\\drivers\\mydriver.inf /install' (install), 'pnputil /delete-driver oem1.inf' (remove), 'pnputil /export-driver * C:\\backup' (backup all). Device Manager (devmgmt.msc): GUI para update/rollback/disable drivers. PowerShell: Get-WindowsDriver, Export-WindowsDriver. Driver Store: C:\\Windows\\System32\\DriverStore\\FileRepository. Windows Update delivery optimization instala drivers automaticamente (pode desabilitar via Group Policy). Troubleshooting: problematic drivers causam BSODs, hardware malfunctions. Safe Mode desabilita third-party drivers. Driver Verifier (verifier.exe) stress-tests drivers. Tools: DriverView (NirSoft), Driver Booster (third-party). Backup estratégia: export drivers before clean install, driver packs para offline installation.",
        "nivel": "base"
    },
    {
        "id": 156,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando exibe informações sobre uso de memória RAM e swap?",
        "alternativas": [
            "df -h",
            "free -h",
            "du -sh",
            "top"
        ],
        "respostaCorreta": 1,
        "explicacao": "free exibe memory usage: 'free -h' (human-readable). Output: total, used, free, shared, buff/cache, available. Buffers/cache: Linux usa RAM livre para cache; 'available' mostra memória disponível para apps (mais relevante que 'free'). Swap: virtual memory em disk; high swap usage indica RAM insuficiente. Commands: 'free -m' (megabytes), 'free -s 5' (update every 5 seconds). /proc/meminfo: detailed info. vmstat: virtual memory statistics: 'vmstat 5' (update every 5s), mostra: swap in/out, memory free, buffers, cache, CPU usage. top/htop mostram per-process memory. Troubleshooting: OOM (Out Of Memory) killer termina processes quando RAM+swap esgotados (dmesg mostra OOM events). Tuning: ajustar swappiness (vm.swappiness sysctl, 0-100, default 60; lower para preferir RAM), adicionar swap (mkswap, swapon), upgrade RAM. Memory leak detection: valgrind, monitor process growth over time.",
        "nivel": "base"
    },
    {
        "id": 157,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual recurso permite criptografar dados em dispositivos removíveis como pendrives?",
        "alternativas": [
            "EFS (Encrypting File System)",
            "BitLocker To Go",
            "Windows Defender",
            "File History"
        ],
        "respostaCorreta": 1,
        "explicacao": "BitLocker To Go criptografa removable drives (USB, external HDD) com AES-128 ou AES-256. Unlocking: password ou smart card. Funcionalidades: AutoUnlock (unlock automaticamente no mesmo PC após primeira vez), Read-only access em sistemas sem BitLocker (BitLocker Reader no XP/Vista). Management: via BitLocker Control Panel, manage-bde CLI: 'manage-bde -on E: -password', 'manage-bde -status', 'manage-bde -lock E:'. Group Policy: force encryption, password complexity, recovery key backup. EFS criptografa files/folders em NTFS (file-level, certificate-based, não removable drives). BitLocker (OS drive) vs BitLocker To Go (removable). Alternatives: VeraCrypt (cross-platform, open source), hardware-encrypted drives (self-encrypting drives com PIN). Use cases: protect data em lost/stolen drives, compliance (HIPAA, PCI-DSS). Recovery: guarde recovery key em local seguro (AD, Azure AD, print, USB).",
        "nivel": "base"
    },
    {
        "id": 158,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual comando permite visualizar mensagens do kernel, incluindo hardware detection e driver loading?",
        "alternativas": [
            "dmesg",
            "uname",
            "lsmod",
            "uptime"
        ],
        "respostaCorreta": 0,
        "explicacao": "dmesg exibe kernel ring buffer: boot messages, hardware detection, driver loading/errors, USB device insertion, disk errors. Examples: 'dmesg | less' (paginate), 'dmesg | grep -i error' (filter errors), 'dmesg -T' (human-readable timestamps), 'dmesg -w' (follow), 'dmesg -C' (clear buffer, requires root). Levels: emerg, alert, crit, err, warn, notice, info, debug. Log também em /var/log/kern.log ou journalctl -k. Use cases: troubleshoot hardware issues (USB not detected, disk errors), driver problems, kernel panics. lsmod lista loaded kernel modules. modprobe load/unload modules. lspci, lsusb list PCI/USB devices. uname mostra kernel version: 'uname -r'. Forensics: dmesg revela hardware changes, timestamps de events. Persistent logging: rsyslog/syslog-ng capture kernel messages. Modern: journalctl -b (current boot), journalctl -b -1 (previous boot).",
        "nivel": "base"
    },
    {
        "id": 159,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Windows, qual política de auditoria registra tentativas de acesso a arquivos e objetos?",
        "alternativas": [
            "Audit Logon Events",
            "Audit Object Access",
            "Audit Policy Change",
            "Audit Privilege Use"
        ],
        "respostaCorreta": 1,
        "explicacao": "Audit Policies (GPO: Computer Configuration > Policies > Windows Settings > Security Settings > Advanced Audit Policy Configuration): Audit Object Access: registra acessos a files, folders, registry keys quando SACLs (System Access Control Lists) configuradas. Configure SACL: Right-click object > Properties > Security > Advanced > Auditing > Add. Event IDs: 4663 (object accessed), 4656 (handle requested), 4660 (object deleted). Other policies: Audit Logon Events (4624 success, 4625 failure), Audit Account Logon Events (domain authentication), Audit Account Management (user/group creation), Audit Policy Change, Audit Privilege Use (sensitive privileges), Audit Process Tracking, Audit System Events. Logs: Security Event Log. File Access auditing use cases: compliance (HIPAA access logs), forensics (who accessed confidential files), troubleshooting (permission issues). Overhead: excessive auditing impacts performance; audit apenas recursos críticos. SIEM integration: forward events para Splunk/ELK.",
        "nivel": "base"
    },
    {
        "id": 160,
        "categoria": "sistemas",
        "tipo": "multipla",
        "enunciado": "No Linux, qual mecanismo permite executar comandos agendados em horários específicos, similar ao Task Scheduler do Windows?",
        "alternativas": [
            "cron ou systemd timers",
            "init",
            "bash scripts",
            "ssh"
        ],
        "respostaCorreta": 0,
        "explicacao": "cron: daemon que executa scheduled tasks (cron jobs). Crontab format: 'minute hour day month weekday command' (ex: '0 2 * * * /path/script.sh' executa daily às 2AM). User crontabs: 'crontab -e' (edit), 'crontab -l' (list), 'crontab -r' (remove). System crontab: /etc/crontab, /etc/cron.d/. Special directories: /etc/cron.daily/, /etc/cron.weekly/, /etc/cron.monthly/ (scripts executam via anacron). Cron shortcuts: @reboot (at boot), @daily, @weekly, @monthly, @yearly. Logging: /var/log/cron ou journalctl. systemd timers: alternativa moderna a cron. Create timer unit (.timer) e service unit (.service): 'systemctl enable --now mytask.timer'. Vantagens: dependency management, logs integrados com journalctl, OnCalendar syntax. at command: one-time scheduled task: 'at 10:00 PM', 'echo \"command\" | at now + 1 hour'. Use cases: backups, log rotation, maintenance, monitoring.",
        "nivel": "base"
    },
    {
        "id": 161,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does the acronym 'MITM' stand for in cybersecurity?",
        "alternativas": [
            "Machine In The Middle",
            "Man-In-The-Middle",
            "Malware In Transmission Mode",
            "Memory Integrity Testing Method"
        ],
        "respostaCorreta": 1,
        "explicacao": "MITM (Man-In-The-Middle) attack é quando atacante intercepta comunicação entre duas partes, podendo escutar ou modificar dados. Tipos: ARP spoofing (rede local), DNS spoofing, rogue Wi-Fi AP, SSL stripping. Mitigações: HTTPS com certificate pinning, HSTS, mutual TLS, VPN, encrypted DNS (DoH/DoT). Detecção: certificate warnings, inconsistent information, network monitoring. Termos relacionados: eavesdropping (escuta), session hijacking, replay attack. MITM viola confidentiality e integrity. É foundation de muitos ataques: credential theft, session hijacking, data injection.",
        "nivel": "base"
    },
    {
        "id": 162,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "In networking, what does 'throughput' refer to?",
        "alternativas": [
            "The physical distance data travels",
            "The actual amount of data successfully transmitted over time",
            "The theoretical maximum speed of a connection",
            "The number of devices on a network"
        ],
        "respostaCorreta": 1,
        "explicacao": "Throughput é quantidade real de dados transmitidos com sucesso por unidade de tempo (typically Mbps ou Gbps), diferente de bandwidth (capacidade máxima teórica). Throughput < bandwidth devido a: protocol overhead, latency, packet loss, congestion, inefficient protocols. Medição: iperf, speedtest. Termos relacionados: goodput (dados úteis excluindo headers), bandwidth (largura de banda), latency (atraso), jitter (variação de latência). Contexto: 'The network bandwidth is 1Gbps but actual throughput is only 800Mbps due to packet loss.' TCP throughput afetado por: window size, RTT, packet loss (TCP throughput ≈ WindowSize / RTT).",
        "nivel": "base"
    },
    {
        "id": 163,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'phishing' mean in cybersecurity context?",
        "alternativas": [
            "Testing network speed",
            "Social engineering attack to steal credentials via fraudulent emails/sites",
            "Installing firewall rules",
            "Scanning for open ports"
        ],
        "respostaCorreta": 1,
        "explicacao": "Phishing é social engineering attack que usa emails, mensagens ou sites fraudulentos para enganar vítimas e roubar: credenciais, financial information, personal data, ou instalar malware. Variantes: spear phishing (targeted), whaling (targeting executives), smishing (SMS), vishing (voice/phone), clone phishing. Indicadores: urgency, spelling errors, suspicious links/attachments, mismatched URLs. Mitigações: security awareness training, email filtering (SPF, DKIM, DMARC), MFA, anti-phishing tools. Exemplo de frase: 'The employee fell victim to a phishing email that appeared to be from IT support.' Termos relacionados: credential harvesting, pretexting, baiting, tailgating.",
        "nivel": "base"
    },
    {
        "id": 164,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is a 'zero-day vulnerability'?",
        "alternativas": [
            "A vulnerability that has been known for zero days",
            "A security flaw unknown to vendor and without available patch",
            "A vulnerability that takes zero days to exploit",
            "A patched vulnerability"
        ],
        "respostaCorreta": 1,
        "explicacao": "Zero-day vulnerability é falha de segurança desconhecida pelo vendor e para qual não existe patch. Zero-day exploit é código que explora essa vulnerabilidade. Perigosos porque: no patch available, defesa é difícil, frequentemente usados por APTs (Advanced Persistent Threats) e nation-states. Descoberta: security researchers, black market, incident response. Window: período entre discovery → public disclosure → patch release → patch deployment. Mitigações: defense-in-depth, IPS/IDS signatures, behavior-based detection, application whitelisting, vulnerability disclosure programs. Exemplo: 'The attackers used a zero-day exploit in the web browser to gain initial access.' Termos relacionados: N-day (known but unpatched), vulnerability disclosure (responsible/coordinated disclosure).",
        "nivel": "base"
    },
    {
        "id": 165,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'hardening' mean in system security?",
        "alternativas": [
            "Making hardware physically stronger",
            "Process of securing system by reducing attack surface and vulnerabilities",
            "Installing more RAM",
            "Encrypting hard drives"
        ],
        "respostaCorreta": 1,
        "explicacao": "Hardening é processo de securing systems através de: disable unnecessary services, remove unused software, apply patches, configure firewalls, enforce least privilege, enable logging/auditing, implement encryption, strong authentication. Hardening guides: CIS Benchmarks, DISA STIGs (Security Technical Implementation Guides), NIST guidelines. Areas: OS hardening (Windows/Linux), application hardening, network hardening, database hardening. Exemplo: 'After hardening the server, we disabled SSH password authentication and implemented key-based auth only.' Princípios: reduce attack surface, defense-in-depth, least functionality. Tools: Bastille Linux, SCAP scanners, Ansible/Chef/Puppet automation. Termos relacionados: baseline configuration, security posture, attack surface.",
        "nivel": "base"
    },
    {
        "id": 166,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'lateral movement' in the context of cyber attacks?",
        "alternativas": [
            "Moving servers to different locations",
            "Attacker's technique to move through network after initial compromise",
            "Physical movement of equipment",
            "Rotating encryption keys"
        ],
        "respostaCorreta": 1,
        "explicacao": "Lateral movement é técnica onde atacante, após initial compromise, navega pela rede para: access other systems, escalate privileges, locate valuable data, establish persistence. Técnicas: pass-the-hash, pass-the-ticket (Kerberos), RDP hopping, PSExec, WMI, PowerShell remoting, stolen credentials. Attack chain: initial access → reconnaissance → lateral movement → privilege escalation → data exfiltration. Detecção: monitor authentication logs (Event ID 4624/4625), unusual account activity, tools: EDR, SIEM correlation, deception technology (honeypots). Mitigação: network segmentation, least privilege, monitor east-west traffic, MFA, privileged access workstations. Exemplo: 'The attacker used stolen administrator credentials for lateral movement across the domain.' Termos relacionados: pivot, beachhead, command and control (C2).",
        "nivel": "base"
    },
    {
        "id": 167,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'APT' stand for in cybersecurity?",
        "alternativas": [
            "Automatic Patch Tool",
            "Advanced Persistent Threat",
            "Application Protection Technology",
            "Active Port Testing"
        ],
        "respostaCorreta": 1,
        "explicacao": "APT (Advanced Persistent Threat) são threat actors sofisticados, tipicamente nation-state ou state-sponsored groups, com: advanced capabilities (zero-days, custom malware), persistent (long-term presence, stealthy), targeted objectives (espionage, sabotage, IP theft). Características: reconnaissance, spear-phishing, lateral movement, data exfiltration, covering tracks. Exemplos: APT28 (Fancy Bear, Russia), APT29 (Cozy Bear), Lazarus Group (North Korea), APT41 (China). Táticas: living off the land (LOLbins), supply chain attacks, watering hole attacks. Defesa: threat intelligence, EDR, network segmentation, hunt operations, incident response. Diferença de commodity malware: APT é targeted, sophisticated, prolonged; malware é opportunistic, widespread. Exemplo: 'The investigation revealed APT group had been in the network for 18 months.' MITRE ATT&CK framework documenta APT TTPs.",
        "nivel": "base"
    },
    {
        "id": 168,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "In networking documentation, what does 'uptime' typically mean?",
        "alternativas": [
            "Time to upgrade systems",
            "Duration a system has been operational without interruption",
            "Speed of data transmission",
            "Time to power on a device"
        ],
        "respostaCorreta": 1,
        "explicacao": "Uptime é duração contínua que sistema está operational desde último boot/restart. Medido em: hours, days, years. High uptime indica: reliability, stability, proper maintenance. SLA (Service Level Agreement) especifica uptime requirements: 99.9% (8.76h downtime/year), 99.99% (52.6min/year), 99.999% (5.26min/year, 'five nines'). Commands: 'uptime' (Linux), Get-CimInstance Win32_OperatingSystem (Windows). Exemplo: 'The production server has an uptime of 365 days without reboots.' Tradeoff: very long uptime pode indicar missing security patches (reboot-required). Planned maintenance windows balanceiam patching vs availability. Termos relacionados: downtime, availability, MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair), high availability, fault tolerance.",
        "nivel": "base"
    },
    {
        "id": 169,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is a 'honeypot' in cybersecurity?",
        "alternativas": [
            "A sweet reward for users",
            "Decoy system designed to lure and detect attackers",
            "A type of firewall",
            "A password manager"
        ],
        "respostaCorreta": 1,
        "explicacao": "Honeypot é decoy system/resource deliberadamente vulnerável para: lure attackers, detect intrusions, study attack techniques, waste attacker's time, protect production systems. Tipos: low-interaction (emula serviços, menos risk), high-interaction (sistema real, maior insight mas mais risk), honeynets (rede de honeypots). Deployment: DMZ, production network (carefully), research environments. Data coletado: attack techniques, malware samples, IOCs (Indicators of Compromise). Honeypots não param ataques, mas providenciam intelligence. Exemplo: 'The honeypot logged 5000 SSH brute-force attempts in 24 hours.' Riscos: se compromised, pode ser used para attack outras systems. Tools: Honeyd, Kippo (SSH), SNARE. Honeytoken: fake credential/data usado como tripwire. Termos relacionados: deception technology, canary tokens.",
        "nivel": "base"
    },
    {
        "id": 170,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'IOC' mean in threat intelligence?",
        "alternativas": [
            "Internet Operations Center",
            "Indicator of Compromise - artifact indicating potential intrusion",
            "Input Output Controller",
            "Internal Operations Command"
        ],
        "respostaCorreta": 1,
        "explicacao": "IOC (Indicator of Compromise) é artifact observável indicando intrusion ou malicious activity: IP addresses, domain names, file hashes (MD5/SHA256), URLs, email addresses, registry keys, mutex names, file paths. IOCs usados para: detect compromises, hunt threats, block indicators (firewall, IPS), share threat intelligence. Formats: OpenIOC, STIX (Structured Threat Information Expression), CSV, JSON. Plataformas: MISP (Malware Information Sharing Platform), ThreatConnect, Anomali. Lifecycle: IOCs têm limited lifespan; attackers change infrastructure. Pyramid of Pain (David Bianco): hash values (easy to change) → IP addresses → domain names → network/host artifacts → tools → TTPs (hard to change). Exemplo: 'The SOC blocked 50 malicious IPs based on IOCs from threat feed.' Diferença de TTP (Tactics, Techniques, Procedures): IOCs são atomic indicators, TTPs descrevem behavior.",
        "nivel": "base"
    },
    {
        "id": 171,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "In incident response, what is meant by 'containment'?",
        "alternativas": [
            "Storing logs in a database",
            "Limiting damage and preventing further spread of incident",
            "Documenting the incident",
            "Recovering systems"
        ],
        "respostaCorreta": 1,
        "explicacao": "Containment é fase de incident response que limita damage e previne spread do incident. Tipos: short-term containment (isolate affected systems, disconnect network, block malicious IPs), long-term containment (apply temporary patches, segmentation). NIST Incident Response phases: Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity. Containment strategies dependem de: incident type, business impact, evidence preservation. Exemplo: 'We isolated the infected servers in a quarantine VLAN as immediate containment.' Trade-offs: aggressive containment pode impact business operations; delayed containment allows spread. Decisões: isolate vs monitor, preserve evidence vs remediate rapidly. Depois: eradication (remove cause), recovery (restore operations). Tools: network segmentation, EDR remote isolation, SOAR playbooks.",
        "nivel": "base"
    },
    {
        "id": 172,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'RCE' stand for in vulnerability context?",
        "alternativas": [
            "Remote Code Execution",
            "Router Configuration Error",
            "Random Cipher Encryption",
            "Registry Control Extension"
        ],
        "respostaCorreta": 0,
        "explicacao": "RCE (Remote Code Execution) vulnerability permite atacante executar arbitrary code remotamente no target system sem autenticação ou com credenciais roubadas. Extremamente crítico (CVSS 9.0-10.0) porque permite: full system compromise, data theft, lateral movement, ransomware deployment. Causas: buffer overflows, deserialization flaws, injection vulnerabilities (SQL, command), insecure APIs. Exemplos famosos: EternalBlue (MS17-010, WannaCry), Log4Shell (CVE-2021-44228), Shellshock. Mitigações: patch immediately, WAF, network segmentation, principle of least privilege, DEP/ASLR. Scanning: vulnerability scanners (Nessus, Qualys), exploit databases (Exploit-DB, Metasploit). Exemplo: 'CVE-2021-34527 (PrintNightmare) is an RCE vulnerability in Windows Print Spooler.' Diferença: LCE (Local Code/Privilege Escalation) requer local access.",
        "nivel": "base"
    },
    {
        "id": 173,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'pivoting' in penetration testing?",
        "alternativas": [
            "Changing testing methodology",
            "Using compromised system to access other network segments",
            "Rotating between different tools",
            "Switching between targets"
        ],
        "respostaCorreta": 1,
        "explicacao": "Pivoting é technique onde penetration tester (ou attacker) usa compromised system como intermediary para access network segments não directly accessible. Process: compromise initial host (foothold) → establish pivot → route traffic through pivoted host → access internal network. Técnicas: SSH tunneling (local/remote/dynamic port forwarding), Metasploit autoroute, proxychains, VPN, reverse shells. Use case: external attacker compromises DMZ server, pivots to internal network. Exemplo: 'After compromising the web server, we pivoted through it to access the internal database server.' Network segmentation dificulta pivoting. Tools: Cobalt Strike beacon, Empire, ProxyChains, sshuttle. Termos relacionados: lateral movement (movimento inside network após pivot), beachhead, network hopping. Legal em pentest com proper authorization; illegal para attackers.",
        "nivel": "base"
    },
    {
        "id": 174,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'C2' or 'C&C' refer to in malware analysis?",
        "alternativas": [
            "Copy and Cut operations",
            "Command and Control - server/infrastructure controlling malware",
            "Compress and Contain",
            "Check and Compare"
        ],
        "respostaCorreta": 1,
        "explicacao": "C2/C&C (Command and Control) é infrastructure que attackers use para communicate with e control compromised systems (bots, infected machines). Functions: send commands, receive stolen data, update malware, coordinate attacks. Protocols: HTTP/HTTPS, DNS tunneling, IRC, custom protocols, social media APIs, P2P. Detection: network monitoring (beaconing behavior, unusual outbound connections), threat intelligence feeds (known C2 IPs/domains), DNS sinkholing. Mitigations: firewall egress filtering, proxy with SSL inspection, DNS filtering, threat intel integration. Botnets use C2 para coordinate DDoS, spam, cryptocurrency mining. Exemplo: 'The malware beacons to its C2 server every 60 seconds for instructions.' Advanced C2: domain generation algorithms (DGA), fast flux, cloud services abuse (legitimate-looking traffic). Termos relacionados: botnet, bot herder, callback, beaconing.",
        "nivel": "base"
    },
    {
        "id": 175,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "In security assessments, what is 'reconnaissance' or 'recon'?",
        "alternativas": [
            "Recovering from an attack",
            "Initial phase of gathering information about target",
            "Reconnecting to the network",
            "Reconfiguring systems"
        ],
        "respostaCorreta": 1,
        "explicacao": "Reconnaissance (recon) é initial phase de attack/pentest onde atacante coleta information sobre target. Tipos: passive recon (OSINT, não direct interaction: search engines, social media, DNS records, WHOIS, job postings, data leaks), active recon (direct interaction, detectable: port scanning, vulnerability scanning, network mapping, social engineering). Information gathered: IP ranges, domain names, email addresses, employee names, technologies used, network topology, vulnerabilities. Tools: Google Dorks, Shodan, theHarvester, Maltego, nmap, Recon-ng. Exemplo: 'During reconnaissance, we identified 3 publicly exposed database servers.' Recon permite targeted attacks. Defense: minimize public exposure, monitor for scanning activity, threat intelligence. Cyber Kill Chain: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives. Termos relacionados: footprinting, enumeration, OSINT.",
        "nivel": "base"
    },
    {
        "id": 176,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is meant by 'defense in depth' strategy?",
        "alternativas": [
            "Defending only the deepest layer",
            "Layered security approach with multiple defensive mechanisms",
            "Using only one strong firewall",
            "Defending against DDoS only"
        ],
        "respostaCorreta": 1,
        "explicacao": "Defense in Depth é security strategy usando múltiplas camadas defensivas para que se uma falhar, outras providenciam protection. Camadas: physical security, network security (firewalls, IPS), host security (antivirus, EDR, hardening), application security (WAF, secure coding), data security (encryption, DLP), policies/procedures, awareness training. Princípio: no single point of failure; attacker deve bypass múltiplas defenses. Exemplo: 'Our defense-in-depth approach includes perimeter firewall, network segmentation, endpoint protection, and MFA.' Analogia: castle com múltiplos walls, moat, guards. Implementação: different technologies, vendors (avoid monoculture), layers. Benefícios: resilience, time para detection/response, limit blast radius. Termos relacionados: layered security, security-in-depth, multiple layers of protection, castle approach. Diferença de 'security through obscurity' (weak strategy relying apenas em secrecy).",
        "nivel": "base"
    },
    {
        "id": 177,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'exfiltration' mean in data breach context?",
        "alternativas": [
            "Filtering network traffic",
            "Unauthorized transfer of data from organization",
            "Installing security updates",
            "Removing old files"
        ],
        "respostaCorreta": 1,
        "explicacao": "Data exfiltration é unauthorized transfer de data from organization to external location controlled por attacker. Métodos: network transfer (HTTP/HTTPS uploads, DNS tunneling, FTP, cloud services), physical (USB drives, portable storage), email attachments, steganography, out-of-band (cellular modem). Motivações: espionage, financial gain, competitive advantage, sabotage. Detecção: DLP (Data Loss Prevention), network monitoring (large outbound transfers, unusual destinations), UEBA (User and Entity Behavior Analytics), endpoint monitoring. Exemplo: 'The attacker exfiltrated 50GB of customer data to cloud storage account.' Exfiltration geralmente é final stage de targeted attack após reconnaissance, initial access, lateral movement, privilege escalation. Prevenção: encryption, access controls, network segmentation, egress filtering, DLP policies. Termos relacionados: data leakage, data theft, data breach, data loss.",
        "nivel": "base"
    },
    {
        "id": 178,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is a 'false positive' in security monitoring?",
        "alternativas": [
            "Alert correctly identifying malicious activity",
            "Alert incorrectly flagging benign activity as malicious",
            "Missed detection of real threat",
            "Positive test result"
        ],
        "respostaCorreta": 1,
        "explicacao": "False positive é quando security system incorrectly identifies benign activity as malicious, gerando alert. Impacto: alert fatigue, wasted time investigating, reduced trust em system, missed real threats (crying wolf). Causas: overly sensitive rules, insufficient context, incomplete signatures, baseline drift. Exemplo: 'The IDS generated 500 false positives per day, mostly from legitimate admin activity.' False negative: system fails to detect actual threat (mais perigoso mas menos visible). Tuning: ajustar thresholds, whitelist known-good, improve baselines, machine learning (reduce FP while maintaining detection). Metrics: Precision = True Positives / (True Positives + False Positives), Recall = True Positives / (True Positives + False Negatives). Balanço: sensitive detection (mais FP) vs conservative (mais FN). SOC deve tune rules, use threat intelligence, implement SOAR for false positive reduction.",
        "nivel": "base"
    },
    {
        "id": 179,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'WAF' stand for in web security?",
        "alternativas": [
            "Wireless Access Firewall",
            "Web Application Firewall",
            "Wide Area Filter",
            "Windows Authentication Framework"
        ],
        "respostaCorreta": 1,
        "explicacao": "WAF (Web Application Firewall) protege web applications filtrando/monitoring HTTP/HTTPS traffic between web app e Internet. Protection contra: SQL injection, XSS (Cross-Site Scripting), CSRF, file inclusion, DDoS, bot attacks, OWASP Top 10 vulnerabilities. Deployment: reverse proxy (inline), transparent bridge, cloud-based (Cloudflare, Akamai). Modes: blocking (enforcement), detection (monitoring), learning (baseline). Rule types: signature-based (known attacks), behavioral (anomalies), positive security model (whitelist), negative security model (blacklist). Exemplo: 'The WAF blocked 10,000 SQL injection attempts today.' Vendors: ModSecurity (open source), F5, Imperva, AWS WAF, Azure WAF. Limitações: não substitui secure coding, pode ter FPs, performance impact. Tuning é crítico. Complementa application security testing (SAST/DAST), secure SDLC.",
        "nivel": "base"
    },
    {
        "id": 180,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "In network security, what is 'egress filtering'?",
        "alternativas": [
            "Filtering incoming traffic only",
            "Filtering outbound traffic from internal network",
            "Filtering email attachments",
            "Filtering wireless signals"
        ],
        "respostaCorreta": 1,
        "explicacao": "Egress filtering controla outbound traffic from internal network to external destinations. Objetivos: prevent data exfiltration, block C2 communications, limit malware spread, enforce acceptable use policies. Implementation: firewall rules (block unnecessary outbound ports, allow only business-required), proxy servers (HTTP/HTTPS inspection, URL filtering), DNS filtering (block malicious domains). Default deny approach: block tudo exceto explicitly allowed. Exemplo: 'Egress filtering prevented the malware from contacting its C2 server on TCP port 4444.' Ingress filtering (inbound) é mais comum mas egress é igualmente importante. Benefits: limit blast radius de compromises, detect anomalous behavior (unusual destinations, protocols), compliance. Challenges: encrypted traffic (SSL/TLS inspection), cloud services (many IPs), false positives. Best practices: whitelist approach, monitor logs, exception process, regular review. Termos relacionados: outbound filtering, data loss prevention (DLP).",
        "nivel": "base"
    },
    {
        "id": 181,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'supply chain attack' in cybersecurity?",
        "alternativas": [
            "Attack on physical supply chains",
            "Compromising trusted third-party to reach final target",
            "Attacking network cables",
            "Interrupting power supply"
        ],
        "respostaCorreta": 1,
        "explicacao": "Supply chain attack compromete trusted third-party (vendor, service provider, software supplier) para reach final target. Vetores: compromised software updates (SolarWinds, Kaseya), malicious libraries/packages (npm, PyPI typosquatting), hardware tampering, managed service providers. Motivações: access to múltiplos customers, trust exploitation, bypass direct defenses. Exemplos famosos: SolarWinds Orion (2020, compromised updates), NotPetya (2017, via Ukrainian accounting software), CCleaner. Impacto: widespread (many organizations affected), difficult detection (trusted source), significant damage. Prevenção: vendor security assessments, SBOM (Software Bill of Materials), code signing verification, network segmentation, least privilege, monitoring third-party access. Exemplo: 'The supply chain attack compromised 18,000 organizations through malicious software update.' Defense requer: vetting vendors, contractual security requirements, continuous monitoring.",
        "nivel": "base"
    },
    {
        "id": 182,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'sandboxing' mean in malware analysis?",
        "alternativas": [
            "Playing games during work",
            "Isolated environment for safely analyzing suspicious files",
            "Backing up to cloud storage",
            "Physical sand-based protection"
        ],
        "respostaCorreta": 1,
        "explicacao": "Sandboxing executa suspicious files/programs em isolated environment para observe behavior sem risco ao production systems. Types: virtual machines, containers, specialized sandboxes (Cuckoo, Joe Sandbox, FireEye). Analysis: network connections, file system changes, registry modifications, process creation, API calls, encryption activity. Benefits: safe detonation, behavioral analysis, IOC extraction, zero-day detection. Limitações: evasion techniques (VM detection, time delays, environment checks), analysis time, resource intensive. Uso: SOC for email attachments/links, endpoint security (cloud sandboxes), malware research. Exemplo: 'The sandbox analysis revealed the file connects to known C2 domain.' Automation: integrate com SOAR, automatic IOC extraction, threat intelligence feeds. Advanced malware detects sandboxes e altera behavior. Multi-stage analysis: static → dynamic → manual reverse engineering.",
        "nivel": "base"
    },
    {
        "id": 183,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'ransomware' and how does it operate?",
        "alternativas": [
            "Software that increases RAM",
            "Malware that encrypts files and demands payment for decryption key",
            "Tool for managing licenses",
            "Backup software"
        ],
        "respostaCorreta": 1,
        "explicacao": "Ransomware é malware que encrypts victim's files/systems e demands ransom payment (typically cryptocurrency) para decryption key. Operation: infection (phishing, RDP, exploit) → encryption (AES, RSA), → ransom note (payment instructions, deadline, threats). Tipos: crypto-ransomware (encrypts files), locker-ransomware (locks system), double extortion (encryption + data leak threat). Famílias: WannaCry, Ryuk, REvil, LockBit, Conti. Impact: business disruption, data loss, reputation damage, financial cost. Prevention: backups (offline, immutable), patch management, email security, endpoint protection, network segmentation, awareness training. Response: don't pay (no guarantee, funds criminals), isolate, forensics, restore from backups. Exemplo: 'The ransomware encrypted 500 servers demanding $5M in Bitcoin.' Ransomware-as-a-Service (RaaS): business model onde developers lease ransomware to affiliates.",
        "nivel": "base"
    },
    {
        "id": 184,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'privilege escalation' mean?",
        "alternativas": [
            "Increasing user disk quota",
            "Gaining higher-level access rights than originally authorized",
            "Upgrading to premium service",
            "Promoting employees"
        ],
        "respostaCorreta": 1,
        "explicacao": "Privilege escalation é technique para gain higher permissions than authorized. Tipos: vertical (user to admin/root), horizontal (access another user's resources). Vectors: exploiting vulnerabilities (kernel exploits, misconfigurations), credential theft, social engineering, sudo misconfigurations, weak file permissions, unpatched software. Windows: exploit UAC bypass, service misconfigurations, DLL hijacking, token manipulation. Linux: SUID binaries, sudo rules, kernel exploits, cron jobs, writable /etc files. Detection: monitor privileged account usage, audit logs (Event ID 4672), baseline behavior, file integrity monitoring. Mitigation: least privilege, patch management, proper configurations, remove unnecessary permissions, monitor privileged operations. Exemplo: 'The attacker escalated from standard user to SYSTEM using CVE-2021-1234.' Attack chain: initial access (low privilege) → privilege escalation → persistence → lateral movement.",
        "nivel": "base"
    },
    {
        "id": 185,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'threat modeling' in application security?",
        "alternativas": [
            "Modeling 3D threats",
            "Systematic approach to identify and mitigate potential security threats",
            "Creating threat actor profiles",
            "Forecasting future attacks"
        ],
        "respostaCorreta": 1,
        "explicacao": "Threat modeling é structured approach para identify, quantify, e address security threats durante design/development. Process: 1) Decompose application (DFDs, components, data flows), 2) Identify threats (STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege), 3) Rank threats (risk = likelihood × impact), 4) Mitigate (security controls). Metodologias: STRIDE (Microsoft), PASTA (Process for Attack Simulation and Threat Analysis), Attack Trees, DREAD (Damage, Reproducibility, Exploitability, Affected users, Discoverability). Benefits: proactive security, cost-effective (fix early), prioritization, compliance. Exemplo: 'Threat modeling identified SQL injection as high risk in login function.' Tools: Microsoft Threat Modeling Tool, OWASP Threat Dragon, IriusRisk. Regular updates quando architecture changes. Integra com SDLC (Secure Development Lifecycle).",
        "nivel": "base"
    },
    {
        "id": 186,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is a 'botnet'?",
        "alternativas": [
            "Network of robots",
            "Network of compromised computers controlled by attacker",
            "Legitimate bot management service",
            "Network automation tool"
        ],
        "respostaCorreta": 1,
        "explicacao": "Botnet é network de compromised computers (bots/zombies) controlled por attacker (bot herder) via C2. Uses: DDoS attacks, spam/phishing campaigns, credential stuffing, cryptocurrency mining, proxy network, click fraud. Size: hundreds to millions de bots. Famous botnets: Mirai (IoT devices, 2016 Dyn DDoS), Zeus (banking trojan), Conficker. Infection: malware (worms, trojans), exploiting vulnerabilities, weak credentials. C2 infrastructure: centralized (IRC, HTTP), decentralized (P2P), hybrid. Takedown: sinkholing (redirect C2 to researchers), legal action, patching vulnerabilities, collaboration (ISPs, law enforcement). Detection: unusual outbound traffic, participation in DDoS, network behavior anomalies. Prevention: patch IoT devices, change default credentials, network segmentation. Exemplo: 'The botnet launched 1Tbps DDoS attack.' Botnet-as-a-Service: rented access to botnets.",
        "nivel": "base"
    },
    {
        "id": 187,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'vulnerability assessment' involve?",
        "alternativas": [
            "Assessing employee vulnerabilities",
            "Systematic review to identify security weaknesses in systems",
            "Physical security audit only",
            "Password complexity checking"
        ],
        "respostaCorreta": 1,
        "explicacao": "Vulnerability Assessment é systematic examination de systems/networks para identify security weaknesses. Process: 1) Asset discovery (inventory), 2) Vulnerability scanning (automated tools), 3) Analysis (verify, classify, prioritize), 4) Reporting (vulnerabilities, risk, remediation), 5) Remediation validation. Tools: Nessus, OpenVAS, Qualys, Rapid7 InsightVM. Scope: network, web applications, databases, configurations. Output: vulnerability list com CVE IDs, CVSS scores, affected assets, recommendations. Diferença de Penetration Testing: VA identifies vulnerabilities (breadth), Pentest exploits them (depth). Frequency: regular scans (weekly/monthly), after changes, compliance requirements (PCI-DSS quarterly). Exemplo: 'Vulnerability assessment found 50 high-risk issues across the infrastructure.' Challenges: false positives, patch management, prioritization (risk-based), scanning impact. Integration: GRC platforms, SIEM, ticketing systems.",
        "nivel": "base"
    },
    {
        "id": 188,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'social engineering' in cybersecurity?",
        "alternativas": [
            "Engineering social media platforms",
            "Psychological manipulation to trick people into divulging information",
            "Building social networks",
            "Engineering team collaboration"
        ],
        "respostaCorreta": 1,
        "explicacao": "Social Engineering manipula people psychologically para perform actions ou divulge confidential information, bypassing technical controls. Técnicas: phishing (email), vishing (voice/phone), smishing (SMS), pretexting (fabricated scenario), baiting (malicious media/downloads), tailgating (physical access), quid pro quo (offer service for information), impersonation. Psychological triggers: authority, urgency, fear, curiosity, helpfulness, trust. Defesa: security awareness training, verify requests (callback known numbers), challenge unexpected requests, report suspicious activity, implement technical controls (MFA, email filtering). Exemplo: 'Attacker called help desk impersonating executive, socially engineered password reset.' Most successful attacks combine social engineering com technical exploits. Kevin Mitnick famously used social engineering. Red team assessments test resistance. Policies: clear verification procedures, least privilege, incident reporting culture. Reconhecer: too good to be true, unusual requests, pressure tactics.",
        "nivel": "base"
    },
    {
        "id": 189,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'network segmentation' aim to achieve?",
        "alternativas": [
            "Dividing network into smaller isolated segments to limit breach impact",
            "Increasing network speed",
            "Combining networks",
            "Segmenting cables physically"
        ],
        "respostaCorreta": 0,
        "explicacao": "Network Segmentation divide network em smaller, isolated segments (zones) com controlled communication entre eles. Benefits: limit lateral movement, contain breaches, enforce least privilege, improve performance, compliance (PCI-DSS requires segmentation). Implementation: VLANs (Layer 2), firewalls/ACLs (Layer 3), zero trust architecture, microsegmentation (granular, per-workload). Segments típicos: DMZ (public-facing), internal corporate, production, development/test, management, guest. Zero Trust: 'never trust, always verify', microsegmentation with identity-based access. Exemplo: 'Network segmentation prevented ransomware from spreading from guest Wi-Fi to production servers.' Requires: traffic analysis (understand flows), policy definition, firewall rules, monitoring. Challenges: complexity, application dependencies, legacy systems. Tools: Cisco ASA/Firepower, Palo Alto, VMware NSX (software-defined), Illumio (microsegmentation). Defense-in-depth strategy.",
        "nivel": "base"
    },
    {
        "id": 190,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'DDoS' and how does it differ from 'DoS'?",
        "alternativas": [
            "DDoS is faster than DoS",
            "DDoS uses multiple sources to overwhelm target, DoS uses single source",
            "They are the same",
            "DoS is more dangerous"
        ],
        "respostaCorreta": 1,
        "explicacao": "DoS (Denial of Service) attack makes resource unavailable por overwhelming it. DDoS (Distributed DoS) usa múltiplas sources (botnet) simultaneamente, amplifying impact e difficulty de mitigation. Tipos: volumetric (flood bandwidth: UDP flood, ICMP flood, amplification attacks), protocol (exploit protocol weaknesses: SYN flood, Ping of Death), application layer (HTTP flood, Slowloris, targeting specific services). Impact: service unavailability, revenue loss, reputation damage, distraction (smokescreen para outro attack). Mitigation: over-provisioning, rate limiting, DDoS mitigation services (Cloudflare, Akamai), BGP blackholing, traffic scrubbing, anycast. Exemplo: 'DDoS attack peaked at 2.3 Tbps using NTP amplification.' Famous: Mirai botnet (2016), GitHub attack (2018, 1.35 Tbps). Diferença: DoS single-source é easier to block (IP blacklist), DDoS distributed sources harder. Detection: traffic spikes, latency, service degradation.",
        "nivel": "base"
    },
    {
        "id": 191,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is meant by 'air gap' or 'air-gapped' system?",
        "alternativas": [
            "System with air conditioning",
            "System physically isolated from unsecured networks",
            "System with gaps in firewalls",
            "Wireless system"
        ],
        "respostaCorreta": 1,
        "explicacao": "Air gap é physical isolation de computer/network from unsecured networks (especially Internet). Usa: critical infrastructure (nuclear facilities, military), sensitive data (classified systems), malware analysis labs, cryptocurrency cold wallets. Security assumption: sem network connectivity = immune to remote attacks. Reality: air gaps podem ser breached via: removable media (USB - Stuxnet), physical access (insider threat), electromagnetic emanations (TEMPEST), acoustic (ultrasonic data transmission), visual (screen captures), supply chain. Stuxnet (2010) famously breached Iranian nuclear facility air gap via USB. Challenges: updates/patches difficult, data transfer processes, operational overhead. Modern approach: unidirectional gateways (data diodes, one-way traffic), strict USB policies, compensating controls. Exemplo: 'The SCADA network is air-gapped from corporate network.' Not foolproof; defense-in-depth ainda needed. Termos relacionados: physically isolated, network isolation, segmented network.",
        "nivel": "base"
    },
    {
        "id": 192,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'baseline' mean in security monitoring?",
        "alternativas": [
            "The lowest security level",
            "Normal behavior pattern used to detect anomalies",
            "First line of defense",
            "Base of network stack"
        ],
        "respostaCorreta": 1,
        "explicacao": "Baseline é established pattern de normal behavior used como reference para detect anomalies/deviations. Types: performance baseline (CPU, memory, network usage), configuration baseline (approved settings), security baseline (normal user/system activity). Estabelecimento: collect data over period (weeks/months), analyze patterns (daily/weekly cycles), document normal ranges, update regularly (legitimate changes). Use cases: anomaly detection (UEBA), capacity planning, troubleshooting, compliance. Exemplo: 'User normally logs in 9-5 weekdays; 3AM Saturday login exceeds baseline and triggers alert.' Drift: gradual deviation from baseline over time; requires periodic review. Tools: SIEM (baseline analytics), UEBA, performance monitoring tools, CIS Benchmarks (configuration baselines). Challenges: dynamic environments, seasonal variations, false positives from legitimate changes. Machine learning improves baseline accuracy. Fundamental para behavioral analytics e threat detection.",
        "nivel": "base"
    },
    {
        "id": 193,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'penetration testing' or 'pentest'?",
        "alternativas": [
            "Testing network penetration depth",
            "Authorized simulated cyber attack to evaluate security",
            "Testing firewall strength only",
            "Physical security testing"
        ],
        "respostaCorreta": 1,
        "explicacao": "Penetration Testing é authorized, simulated cyber attack para identify exploitable vulnerabilities. Types: Black box (no prior knowledge), White box (full knowledge), Gray box (partial knowledge). Methodology: PTES (Penetration Testing Execution Standard), OWASP Testing Guide, OSSTMM. Phases: Planning → Reconnaissance → Scanning → Gaining Access → Maintaining Access → Analysis/Reporting. Scope: network, web applications, wireless, physical, social engineering. Diferença de Vulnerability Assessment: VA identifies vulnerabilities, Pentest exploits them (proves impact). Certifications: CEH, OSCP, GPEN. Report: executive summary, technical findings, risk ratings, proof-of-concept, remediation recommendations. Exemplo: 'Penetration test demonstrated critical RCE vulnerability allowing full domain compromise.' Frequency: annual, after major changes, compliance requirements. Red team (adversary simulation) vs Pentest (finding vulnerabilities). Legal: requires explicit written authorization, scope definition, rules of engagement.",
        "nivel": "base"
    },
    {
        "id": 194,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'SOC' stand for in cybersecurity operations?",
        "alternativas": [
            "Standard Operating Center",
            "Security Operations Center - team monitoring and analyzing security",
            "System on Chip",
            "Source of Control"
        ],
        "respostaCorreta": 1,
        "explicacao": "SOC (Security Operations Center) é centralized team responsible por monitoring, detecting, analyzing, e responding to security incidents 24/7. Functions: security monitoring (SIEM), incident response, threat hunting, vulnerability management, threat intelligence, forensics. Roles: SOC analyst (tiers 1-3), incident responder, threat hunter, SOC manager. Tools: SIEM (Splunk, QRadar), EDR, SOAR, threat intelligence platforms, ticketing. Metrics: MTTD (Mean Time To Detect), MTTR (Mean Time To Respond), alert volume, false positive rate. SOC models: in-house, outsourced (MSSP), hybrid, virtual/distributed. Maturity levels: reactive → proactive → predictive. Exemplo: 'SOC detected and contained ransomware within 2 hours.' Challenges: alert fatigue, skill shortage, tool sprawl, 24/7 coverage. Improvements: automation (SOAR), threat intelligence integration, playbooks, continuous training. NOC (Network Operations Center) foca em availability/performance, SOC em security.",
        "nivel": "base"
    },
    {
        "id": 195,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'forensics' or 'digital forensics' in incident response?",
        "alternativas": [
            "Physical crime scene investigation",
            "Scientific process of collecting and analyzing digital evidence",
            "Network speed testing",
            "Data recovery from backups"
        ],
        "respostaCorreta": 1,
        "explicacao": "Digital Forensics é process de collecting, preserving, analyzing, e presenting digital evidence from incidents. Phases: Identification (what evidence exists), Preservation (prevent alteration, chain of custody), Collection (acquire data forensically), Analysis (examine evidence, reconstruct events), Reporting (findings, timeline, conclusions). Types: disk forensics (file systems, deleted files), memory forensics (RAM analysis), network forensics (packet captures), mobile forensics. Principles: maintain integrity (hash verification), chain of custody, documentation, repeatability. Tools: FTK, EnCase, Autopsy, Volatility (memory), Wireshark (network). Evidence: logs, memory dumps, disk images, network captures, malware samples. Exemplo: 'Forensic analysis revealed attacker accessed system via compromised VPN credentials on March 15 at 02:34 UTC.' Use cases: incident response, legal proceedings, threat intelligence, lessons learned. Write blockers prevent evidence modification. Timeline analysis correlates events. Expert witness testimony.",
        "nivel": "base"
    },
    {
        "id": 196,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'EDR' stand for in endpoint security?",
        "alternativas": [
            "External Data Recovery",
            "Endpoint Detection and Response - continuous monitoring and response",
            "Encrypted Data Repository",
            "Enterprise Data Retention"
        ],
        "respostaCorreta": 1,
        "explicacao": "EDR (Endpoint Detection and Response) é endpoint security solution providing continuous monitoring e automated response capabilities. Functions: real-time monitoring (processes, network, files), behavioral analysis, threat detection (IOCs, machine learning), incident investigation (forensic data), automated response (isolate, kill process, quarantine), threat hunting. Diferença de traditional antivirus: AV signature-based e prevention-focused; EDR detection-and-response focused, behavioral. Vendors: CrowdStrike Falcon, Carbon Black, SentinelOne, Microsoft Defender for Endpoint. Features: telemetry collection, dashboards, alerting, playbooks, integration (SIEM, SOAR). XDR (Extended Detection and Response) extends beyond endpoints (network, email, cloud). Exemplo: 'EDR detected and isolated compromised workstation within minutes.' Benefits: visibility, rapid response, reduced dwell time, threat hunting. Challenges: alert volume, resource usage, deployment scale. Deployment: agents on endpoints, cloud console. Evolution: EPP (Endpoint Protection Platform) → EDR → XDR.",
        "nivel": "base"
    },
    {
        "id": 197,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'encryption at rest' versus 'encryption in transit'?",
        "alternativas": [
            "Same thing",
            "At rest: stored data encrypted, In transit: data encrypted while moving",
            "At rest is faster",
            "In transit only for emails"
        ],
        "respostaCorreta": 1,
        "explicacao": "Encryption at Rest protege data stored em disk/database (protects against: physical theft, unauthorized access to storage, data center breaches). Examples: Full Disk Encryption (BitLocker, FileVault), database encryption (TDE), file-level encryption (EFS), cloud storage encryption (S3 encryption). Encryption in Transit protege data moving between systems/networks (protects against: eavesdropping, MITM, network sniffing). Examples: TLS/SSL (HTTPS), VPN (IPsec, OpenVPN), SSH, encrypted email (S/MIME, PGP). Ambos são essentials: data vulnerable em multiple states. Exemplo: 'Credit card data is encrypted at rest in database and in transit via TLS 1.3.' Compliance requirements (PCI-DSS, HIPAA, GDPR) often mandate both. Key management crítico: HSM, key rotation, access controls. Encryption in use (homomorphic encryption, secure enclaves) protege data durante processing. Termos relacionados: end-to-end encryption, data-at-rest, data-in-motion.",
        "nivel": "base"
    },
    {
        "id": 198,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'SIEM' stand for and what is its purpose?",
        "alternativas": [
            "Security Information and Event Management - centralized log analysis",
            "System Internet Email Manager",
            "Secure Internal Encryption Method",
            "Software Installation and Error Monitoring"
        ],
        "respostaCorreta": 0,
        "explicacao": "SIEM (Security Information and Event Management) é centralized platform collecting, aggregating, analyzing e correlating security logs/events from múltiplas sources. Functions: log collection (agents, syslog, APIs), normalization (standardize formats), correlation (detect patterns), alerting (rules, thresholds), dashboards, compliance reporting, forensics. Sources: firewalls, IDS/IPS, servers, endpoints, applications, cloud services. Use cases: threat detection, incident investigation, compliance (PCI-DSS, HIPAA), security monitoring. Vendors: Splunk, IBM QRadar, LogRhythm, ArcSight, Elastic SIEM. Correlation rules: detect suspicious patterns (multiple failed logins → successful login, port scan → exploit attempt). Exemplo: 'SIEM correlated VPN login from Russia with impossibile-travel scenario.' Challenges: log volume, tuning rules, storage costs, skilled analysts needed. Evolution: SEM (event management) + SIM (information management) = SIEM. Modern: SIEM + SOAR + UEBA = detection & response platform.",
        "nivel": "base"
    },
    {
        "id": 199,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What is 'threat intelligence' or 'threat intel'?",
        "alternativas": [
            "Intelligence about threats to business",
            "Analyzed information about cyber threats, actors, and TTPs",
            "Artificial intelligence for threats",
            "Intelligence agency operations"
        ],
        "respostaCorreta": 1,
        "explicacao": "Threat Intelligence é evidence-based knowledge about existing/emerging threats incluindo: threat actors, TTPs, IOCs, vulnerabilities, context. Tipos: Strategic (high-level, for executives, threat landscape), Tactical (TTPs for defenders), Operational (campaigns, attribution), Technical (IOCs for detection). Sources: open-source (OSINT), commercial feeds, ISACs (Information Sharing and Analysis Centers), internal (SOC findings), dark web monitoring. Formats: STIX/TAXII (structured sharing), OpenIOC, MISP. Use cases: threat detection (integrate IOCs in SIEM/firewalls), threat hunting, incident response (understand adversary), security strategy. Threat Intelligence Lifecycle: Direction (requirements) → Collection → Processing → Analysis → Dissemination → Feedback. Exemplo: 'Threat intel indicated APT group targeting our industry with new phishing campaign.' Platforms: Recorded Future, ThreatConnect, Anomali. Challenges: actionable intel, false positives, overwhelming volume. MITRE ATT&CK framework organizes TTPs. TIP (Threat Intelligence Platform) centralizes management.",
        "nivel": "base"
    },
    {
        "id": 200,
        "categoria": "ingles",
        "tipo": "multipla",
        "enunciado": "What does 'GDPR' stand for and what is its main purpose?",
        "alternativas": [
            "General Data Protection Regulation - EU data privacy law",
            "Global Digital Processing Rights",
            "Government Data Policy Requirements",
            "Generalized Database Protection Rules"
        ],
        "respostaCorreta": 0,
        "explicacao": "GDPR (General Data Protection Regulation) é comprehensive data privacy law da European Union (enforcement desde May 2018). Scope: applies to any organization processing personal data de EU residents, regardless de organization location. Key principles: lawful processing, purpose limitation, data minimization, accuracy, storage limitation, integrity/confidentiality, accountability. Individual rights: access, rectification, erasure ('right to be forgotten'), data portability, object to processing, not be subject to automated decisions. Requirements: consent, data breach notification (72 hours), DPO (Data Protection Officer) for certain organizations, privacy by design, DPIA (Data Protection Impact Assessment). Penalties: up to €20M ou 4% annual global turnover. Exemplo: 'Organization implemented GDPR compliance including consent management and breach notification procedures.' Impact: global standard, influenced other laws (CCPA, LGPD), increased privacy awareness. Technical: encryption, pseudonymization, access controls, audit logs, data inventory. Similar: CCPA (California), LGPD (Brazil).",
        "nivel": "base"
    },
    {
        "id": 1001,
        "categoria": "redes",
        "enunciado": "Um host possui o endereço IP 192.168.10.55/27. Qual é o endereço de Broadcast desta sub-rede?",
        "alternativas": [
            "192.168.10.63",
            "192.168.10.255",
            "192.168.10.31",
            "192.168.10.64"
        ],
        "respostaCorreta": 0,
        "explicacao": "Máscara /27 (255.255.255.224). O bloco é 32. IP .55 está no intervalo .32-.63. Broadcast é o último: .63.",
        "nivel": "elite"
    },
    {
        "id": 1002,
        "categoria": "redes",
        "enunciado": "Qual flag TCP é utilizada para iniciar o Three-Way Handshake?",
        "alternativas": [
            "FIN",
            "SYN",
            "RST",
            "ACK"
        ],
        "respostaCorreta": 1,
        "explicacao": "O handshake começa com o cliente enviando um pacote SYN.",
        "nivel": "elite"
    },
    {
        "id": 1003,
        "categoria": "redes",
        "enunciado": "O que acontece quando o TTL (Time to Live) de um pacote IP atinge zero?",
        "alternativas": [
            "Volta para a origem",
            "O roteador descarta e envia ICMP Time Exceeded",
            "Retransmite",
            "Reseta para 64"
        ],
        "respostaCorreta": 1,
        "explicacao": "O pacote é descartado para evitar loops infinitos. O remetente recebe um aviso ICMP Tipo 11.",
        "nivel": "elite"
    },
    {
        "id": 1004,
        "categoria": "redes",
        "enunciado": "Quantos hosts utilizáveis existem em uma sub-rede /28?",
        "alternativas": [
            "16",
            "14",
            "30",
            "32"
        ],
        "respostaCorreta": 1,
        "explicacao": "32-28=4 bits de host. 2^4 = 16 endereços. Menos 2 (Rede e Broadcast) = 14 hosts.",
        "nivel": "elite"
    },
    {
        "id": 1005,
        "categoria": "redes",
        "enunciado": "Qual a função do protocolo ARP?",
        "alternativas": [
            "Resolver nomes DNS",
            "Mapear IP para MAC Address",
            "Criptografar dados",
            "Roteamento BGP"
        ],
        "respostaCorreta": 1,
        "explicacao": "ARP (L2) pergunta \"Quem tem o IP X?\" para descobrir o MAC de destino na LAN.",
        "nivel": "elite"
    },
    {
        "id": 1006,
        "categoria": "redes",
        "enunciado": "Em qual camada do modelo OSI operam os Switches (padrão) e Roteadores, respectivamente?",
        "alternativas": [
            "Camada 1 e 2",
            "Camada 2 (Enlace) e Camada 3 (Rede)",
            "Camada 3 e 4",
            "Camada 7 e 1"
        ],
        "respostaCorreta": 1,
        "explicacao": "Switches usam MAC Addresses (L2). Roteadores usam IPs (L3).",
        "nivel": "elite"
    },
    {
        "id": 1007,
        "categoria": "redes",
        "enunciado": "O que é a \"Distância Administrativa\" em tabelas de roteamento?",
        "alternativas": [
            "A distância física do cabo",
            "Um valor que indica a confiabilidade da fonte da rota (menor é melhor)",
            "O número de saltos",
            "A velocidade do link"
        ],
        "respostaCorreta": 1,
        "explicacao": "Uma rota Estática (AD 1) é preferida sobre OSPF (AD 110) porque tem AD menor.",
        "nivel": "elite"
    },
    {
        "id": 1008,
        "categoria": "redes",
        "enunciado": "Qual a principal diferença do switch \"Store-and-Forward\" comparado ao \"Cut-Through\"?",
        "alternativas": [
            "Store-and-Forward é mais rápido",
            "Store-and-Forward lê o quadro inteiro e verifica o CRC antes de encaminhar (mais confiável, maior latência)",
            "Cut-Through verifica erros",
            "Não há diferença"
        ],
        "respostaCorreta": 1,
        "explicacao": "Cut-Through começa a enviar assim que lê o MAC de destino (rápido, mas propaga erros).",
        "nivel": "elite"
    },
    {
        "id": 1009,
        "categoria": "redes",
        "enunciado": "Qual é o MTU (Maximum Transmission Unit) padrão para Ethernet v2?",
        "alternativas": [
            "1492 bytes",
            "1500 bytes",
            "65535 bytes",
            "9000 bytes"
        ],
        "respostaCorreta": 1,
        "explicacao": "1500 bytes de payload. Quadros maiores são Jumbo Frames e requerem config específica.",
        "nivel": "elite"
    },
    {
        "id": 1010,
        "categoria": "redes",
        "enunciado": "Para que serve a técnica de NAT (Network Address Translation)?",
        "alternativas": [
            "Acelerar a conexão",
            "Permitir que múltiplos dispositivos em rede privada usem um único IP Público",
            "Filtrar vírus",
            "Criar VPNs"
        ],
        "respostaCorreta": 1,
        "explicacao": "NAT mascara os IPs privados (192.168.x.x) atrás do IP público do roteador.",
        "nivel": "elite"
    },
    {
        "id": 1011,
        "categoria": "redes",
        "enunciado": "Qual destes endereços é um endereço de Multicast IPv4?",
        "alternativas": [
            "192.168.1.1",
            "224.0.0.5",
            "10.0.0.1",
            "172.16.0.1"
        ],
        "respostaCorreta": 1,
        "explicacao": "Classe D (224.0.0.0 a 239.255.255.255) é reservada para Multicast.",
        "nivel": "elite"
    },
    {
        "id": 1012,
        "categoria": "redes",
        "enunciado": "O que significa a sigla CIDR?",
        "alternativas": [
            "Classless Inter-Domain Routing",
            "Computer ID Registry",
            "Code Injection Detection",
            "Control Interface Data"
        ],
        "respostaCorreta": 0,
        "explicacao": "CIDR aboliu as Classes A, B, C rígidas, permitindo usar qualquer máscara (/13, /27) para otimizar o uso de IPs.",
        "nivel": "elite"
    },
    {
        "id": 1013,
        "categoria": "redes",
        "enunciado": "No cabo UTP T568A, qual a cor do pino 1?",
        "alternativas": [
            "Laranja",
            "Branco-Verde",
            "Azul",
            "Marrom"
        ],
        "respostaCorreta": 1,
        "explicacao": "T568A começa com Branco-Verde. T568B começa com Branco-Laranja.",
        "nivel": "elite"
    },
    {
        "id": 1014,
        "categoria": "redes",
        "enunciado": "Qual porta TCP é usada pelo protocolo BGP (Border Gateway Protocol)?",
        "alternativas": [
            "179",
            "80",
            "443",
            "110"
        ],
        "respostaCorreta": 0,
        "explicacao": "BGP, o protocolo que faz a internet funcionar, usa TCP 179 para trocar rotas entre AS (Sistemas Autônomos).",
        "nivel": "elite"
    },
    {
        "id": 1015,
        "categoria": "redes",
        "enunciado": "Qual a função do comando \"tracert\" (ou traceroute)?",
        "alternativas": [
            "Verificar DNS",
            "Listar os roteadores no caminho até o destino usando TTL incremental",
            "Testar velocidade",
            "Capturar senhas"
        ],
        "respostaCorreta": 1,
        "explicacao": "Mapeia a rota salto a salto.",
        "nivel": "elite"
    },
    {
        "id": 1016,
        "categoria": "redes",
        "enunciado": "O que é um \"Broadcast Domain\"?",
        "alternativas": [
            "Um site de notícias",
            "O conjunto de dispositivos que recebem um quadro de broadcast enviado por qualquer um deles (limitado por roteadores/VLANs)",
            "Um domínio .com",
            "Uma senha de admin"
        ],
        "respostaCorreta": 1,
        "explicacao": "Roteadores barram broadcast. Switches (sem VLAN) propagam broadcast.",
        "nivel": "elite"
    },
    {
        "id": 1017,
        "categoria": "redes",
        "enunciado": "Qual a finalidade de um servidor DHCP Relay?",
        "alternativas": [
            "Repetir sinal Wi-Fi",
            "Encaminhar requisições DHCP de uma sub-rede sem servidor DHCP para um servidor DHCP central remoto",
            "Servir café",
            "Bloquear IPs"
        ],
        "respostaCorreta": 1,
        "explicacao": "Como o DHCP Discover é Broadcast (não passa pelo roteador), o Roteador precisa \"pegar\" esse pacote e encaminhar via Unicast para o servidor DHCP.",
        "nivel": "elite"
    },
    {
        "id": 1018,
        "categoria": "redes",
        "enunciado": "Qual a diferença entre Half-Duplex e Full-Duplex?",
        "alternativas": [
            "Full-Duplex é mais lento",
            "Half: um fala por vez (Hubs); Full: ambos falam ao mesmo tempo (Switches)",
            "Half é áudio, Full é vídeo",
            "Não existe diferença"
        ],
        "respostaCorreta": 1,
        "explicacao": "Switches permitem Full-Duplex, dobrando a banda efetiva e eliminando colisões.",
        "nivel": "elite"
    },
    {
        "id": 1019,
        "categoria": "redes",
        "enunciado": "Qual o endereço de Loopback padrão no IPv6?",
        "alternativas": [
            "::1",
            "127.0.0.1",
            "FE80::1",
            "2001::1"
        ],
        "respostaCorreta": 0,
        "explicacao": "::1 é o localhost do IPv6.",
        "nivel": "elite"
    },
    {
        "id": 1020,
        "categoria": "redes",
        "enunciado": "O que é latência (Ping)?",
        "alternativas": [
            "Largura de banda",
            "O tempo de ida e volta (RTT) que um pacote leva da origem ao destino e de volta",
            "Perda de pacote",
            "Jitter"
        ],
        "respostaCorreta": 1,
        "explicacao": "Latência é atraso. Bandwidth é capacidade.",
        "nivel": "elite"
    },
    {
        "id": 1021,
        "categoria": "protocolos",
        "enunciado": "Qual a porta padrão do HTTPS e qual protocolo de segurança ele usa subjacente?",
        "alternativas": [
            "80, SSH",
            "443, TLS/SSL",
            "22, IPSec",
            "8080, VPN"
        ],
        "respostaCorreta": 1,
        "explicacao": "HTTPS roda na 443 TCP e encapsula HTTP dentro de um túnel TLS.",
        "nivel": "elite"
    },
    {
        "id": 1022,
        "categoria": "protocolos",
        "enunciado": "No DNS, o que faz um registro do tipo \"MX\" (Mail Exchanger)?",
        "alternativas": [
            "Aponta para o servidor web",
            "Indica quais servidores de email são responsáveis por receber mensagens para aquele domínio",
            "Cria um alias",
            "Define IPv6"
        ],
        "respostaCorreta": 1,
        "explicacao": "Sem registro MX, ninguém te manda email. O servidor \"remetente\" consulta o DNS: \"Onde entrego email para @gmail.com?\".",
        "nivel": "elite"
    },
    {
        "id": 1023,
        "categoria": "protocolos",
        "enunciado": "Qual a diferença crítica entre FTP Ativo e FTP Passivo?",
        "alternativas": [
            "Nenhuma",
            "No Ativo, o servidor inicia a conexão de dados de volta para o cliente (problema com firewalls); No Passivo, o cliente inicia ambas as conexões",
            "O Ativo é mais seguro",
            "O Passivo é para Linux"
        ],
        "respostaCorreta": 1,
        "explicacao": "FTP Ativo quebra em clientes atrás de NAT. FTP Passivo resolve isso.",
        "nivel": "elite"
    },
    {
        "id": 1024,
        "categoria": "protocolos",
        "enunciado": "Qual método HTTP é utilizado para solicitar que o servidor armazene o corpo da requisição em uma URL específica (Update/Create)?",
        "alternativas": [
            "GET",
            "POST/PUT",
            "HEAD",
            "OPTIONS"
        ],
        "respostaCorreta": 1,
        "explicacao": "POST (cria novo) ou PUT (atualiza/cria específico) enviam dados.",
        "nivel": "elite"
    },
    {
        "id": 1025,
        "categoria": "protocolos",
        "enunciado": "Qual a função do protocolo ICMP?",
        "alternativas": [
            "Enviar emails",
            "Controle, diagnóstico e relato de erros em redes IP (ex: Ping, Destination Unreachable)",
            "Transferir arquivos",
            "Navegação web"
        ],
        "respostaCorreta": 1,
        "explicacao": "ICMP é o \"mecânico\" do protocolo IP. Avisa quando rotas falham ou tempos expiram.",
        "nivel": "elite"
    },
    {
        "id": 1026,
        "categoria": "protocolos",
        "enunciado": "Em uma conexão SSH, o arquivo \"known_hosts\" no cliente serve para quê?",
        "alternativas": [
            "Salvar senhas",
            "Armazenar as chaves públicas dos servidores confiáveis para detectar ataques Man-in-the-Middle",
            "Configurar IP",
            "Salvar o histórico"
        ],
        "respostaCorreta": 1,
        "explicacao": "Se a chave do servidor mudar repentinamente, o SSH avisa \"WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!\", prevenindo MitM.",
        "nivel": "elite"
    },
    {
        "id": 1027,
        "categoria": "protocolos",
        "enunciado": "Qual protocolo é usado para sincronização precisa de relógios?",
        "alternativas": [
            "HTTP",
            "NTP (Network Time Protocol)",
            "FTP",
            "SMTP"
        ],
        "respostaCorreta": 1,
        "explicacao": "Porta 123 UDP. Essencial para logs e autenticação.",
        "nivel": "elite"
    },
    {
        "id": 1028,
        "categoria": "protocolos",
        "enunciado": "O que é o protocolo \"IMAP\" e como difere do \"POP3\"?",
        "alternativas": [
            "São iguais",
            "IMAP sincroniza pastas e estados (lido/não lido) no servidor; POP3 baixa e apaga (geralmente) do servidor",
            "IMAP envia emails",
            "IMAP é pago"
        ],
        "respostaCorreta": 1,
        "explicacao": "IMAP é ideal para acessar email de múltiplos dispositivos (celular e PC).",
        "nivel": "elite"
    },
    {
        "id": 1029,
        "categoria": "protocolos",
        "enunciado": "Qual a função do campo \"User-Agent\" no cabeçalho HTTP?",
        "alternativas": [
            "Identificar o usuário logado",
            "Identificar o software cliente (navegador, OS, versão) que está fazendo a requisição",
            "Contar acessos",
            "Definir idioma"
        ],
        "respostaCorreta": 1,
        "explicacao": "Permite ao servidor entregar conteúdos diferentes para Mobile vs Desktop.",
        "nivel": "elite"
    },
    {
        "id": 1030,
        "categoria": "protocolos",
        "enunciado": "Qual porta padrão do serviço Telnet e por que ele deve ser evitado?",
        "alternativas": [
            "23, porque trafega tudo (inclusive senhas) em texto plano",
            "22, porque é lento",
            "80, porque é web",
            "443, porque é criptografado"
        ],
        "respostaCorreta": 0,
        "explicacao": "Telnet é inseguro. Use SSH (22).",
        "nivel": "elite"
    },
    {
        "id": 1031,
        "categoria": "protocolos",
        "enunciado": "O que é o protocolo SNMP Trap?",
        "alternativas": [
            "Uma armadilha para hackers",
            "Uma mensagem não solicitada enviada pelo agente (dispositivo) para o gerente (NMS) informando um evento crítico (ex: Link Down)",
            "Um comando de reboot",
            "Uma falha de segurança"
        ],
        "respostaCorreta": 1,
        "explicacao": "Traps são alertas ativos. O switch grita: \"Socorro, a porta 1 caiu!\".",
        "nivel": "elite"
    },
    {
        "id": 1032,
        "categoria": "protocolos",
        "enunciado": "Qual a versão mais recente e segura do protocolo TLS recomendada atualmente?",
        "alternativas": [
            "SSL v3.0",
            "TLS 1.0",
            "TLS 1.1",
            "TLS 1.3"
        ],
        "respostaCorreta": 3,
        "explicacao": "TLS 1.2 ainda é aceitável, mas 1.3 é o padrão moderno (mais rápido e seguro).",
        "nivel": "elite"
    },
    {
        "id": 1033,
        "categoria": "protocolos",
        "enunciado": "Qual porta UDP é usada pelo servidor DHCP?",
        "alternativas": [
            "67 (Server) e 68 (Client)",
            "80",
            "443",
            "21"
        ],
        "respostaCorreta": 0,
        "explicacao": "DHCP usa portas diferentes para evitar confusão no broadcast.",
        "nivel": "elite"
    },
    {
        "id": 1034,
        "categoria": "protocolos",
        "enunciado": "O que o código HTTP 403 Forbidden significa?",
        "alternativas": [
            "Página não encontrada",
            "O servidor entendeu o pedido, mas se recusa a autorizá-lo (permissão negada)",
            "Erro interno",
            "Sucesso"
        ],
        "respostaCorreta": 1,
        "explicacao": "Diferente do 401 (Não Autenticado/Sem senha), o 403 diz \"Eu sei quem é você, e você não pode entrar aqui\".",
        "nivel": "elite"
    },
    {
        "id": 1035,
        "categoria": "protocolos",
        "enunciado": "Qual protocolo é utilizado para gerenciar grupos Multicast?",
        "alternativas": [
            "IGMP (Internet Group Management Protocol)",
            "ICMP",
            "TCP",
            "UDP"
        ],
        "respostaCorreta": 0,
        "explicacao": "Hosts usam IGMP para dizer ao roteador: \"Quero receber o vídeo da câmera X\".",
        "nivel": "elite"
    },
    {
        "id": 1036,
        "categoria": "protocolos",
        "enunciado": "Qual a função do protocolo SIP (Session Initiation Protocol)?",
        "alternativas": [
            "Transferir arquivos",
            "Sinalização para iniciar, manter e encerrar sessões multimídia (VoIP, vídeo)",
            "Zipar arquivos",
            "Roteamento"
        ],
        "respostaCorreta": 1,
        "explicacao": "O SIP é o \"telefonista\" do VoIP. Ele faz o telefone tocar. O áudio em si vai por RTP.",
        "nivel": "elite"
    },
    {
        "id": 1037,
        "categoria": "protocolos",
        "enunciado": "O que é um \"Three-Way Handshake\" no TCP?",
        "alternativas": [
            "Um aperto de mão triplo",
            "SYN, SYN-ACK, ACK. O processo de estabelecimento de conexão confiável",
            "Troca de chaves",
            "Login, Senha, Token"
        ],
        "respostaCorreta": 1,
        "explicacao": "Cliente: \"Quer conversar?\" (SYN). Servidor: \"Quero, você quer?\" (SYN-ACK). Cliente: \"Quero.\" (ACK).",
        "nivel": "elite"
    },
    {
        "id": 1038,
        "categoria": "protocolos",
        "enunciado": "Qual registro DNS reverso mapeia IP para Nome?",
        "alternativas": [
            "A",
            "PTR (Pointer)",
            "CNAME",
            "TXT"
        ],
        "respostaCorreta": 1,
        "explicacao": "PTR records são usados em zonas reversas (ex: 1.168.192.in-addr.arpa) para validar remetentes de email.",
        "nivel": "elite"
    },
    {
        "id": 1039,
        "categoria": "protocolos",
        "enunciado": "O que é o TFTP (Trivial FTP)?",
        "alternativas": [
            "Um FTP complexo",
            "Uma versão simplificada do FTP baseada em UDP, sem autenticação, usada para boot remoto (PXE) e config de roteadores",
            "FTP seguro",
            "FTP rápido"
        ],
        "respostaCorreta": 1,
        "explicacao": "UDP + Sem senha = Rápido e Perigoso. Ideal para carregar firmware na LAN.",
        "nivel": "elite"
    },
    {
        "id": 1040,
        "categoria": "protocolos",
        "enunciado": "Qual código HTTP indica \"Internal Server Error\"?",
        "alternativas": [
            "200",
            "404",
            "500",
            "302"
        ],
        "respostaCorreta": 2,
        "explicacao": "500 = \"Algo quebrou no backend (código, banco de dados)\". Culpa do dev, não do cliente.",
        "nivel": "elite"
    },
    {
        "id": 1041,
        "categoria": "criptografia",
        "enunciado": "Qual a principal desvantagem da cifra de César?",
        "alternativas": [
            "Muito difícil de calcular",
            "Espaço de chave minúsculo (25 possibilidades), trivialmente quebrável por força bruta",
            "Requer computadores quânticos",
            "Não usa números"
        ],
        "respostaCorreta": 1,
        "explicacao": "É uma cifra de substituição monoalfabética antiga e insegura.",
        "nivel": "elite"
    },
    {
        "id": 1042,
        "categoria": "criptografia",
        "enunciado": "O que garante a propriedade de \"Confidencialidade\"?",
        "alternativas": [
            "Hash",
            "Criptografia (Simétrica ou Assimétrica)",
            "Assinatura Digital",
            "Backup"
        ],
        "respostaCorreta": 1,
        "explicacao": "Confidencialidade = Só quem tem a chave lê. Assinatura garante Integridade/Autenticidade.",
        "nivel": "elite"
    },
    {
        "id": 1043,
        "categoria": "criptografia",
        "enunciado": "Qual o tamanho do hash SHA-256?",
        "alternativas": [
            "128 bits",
            "256 bits (32 bytes)",
            "512 bits",
            "1024 bits"
        ],
        "respostaCorreta": 1,
        "explicacao": "O nome diz tudo. SHA-2 Secure Hash Algorithm 256 bits.",
        "nivel": "elite"
    },
    {
        "id": 1044,
        "categoria": "criptografia",
        "enunciado": "O algoritmo RSA baseia sua segurança em qual problema matemático?",
        "alternativas": [
            "Logaritmo Discreto",
            "Fatoração de grandes números primos",
            "Curvas Elípticas",
            "Mochila"
        ],
        "respostaCorreta": 1,
        "explicacao": "Multiplicar dois primos gigantes é fácil. Descobrir quais primos geraram um número gigante (fatorar) é computacionalmente inviável.",
        "nivel": "elite"
    },
    {
        "id": 1045,
        "categoria": "criptografia",
        "enunciado": "O que é uma \"Colisão de Hash\"?",
        "alternativas": [
            "Dois arquivos diferentes gerando o mesmo hash",
            "Dois arquivos iguais gerando hashes diferentes",
            "Um erro de disco",
            "Um vírus"
        ],
        "respostaCorreta": 0,
        "explicacao": "Isso quebra a integridade. Se eu consigo criar um contrato falso com o mesmo hash do original, a assinatura digital é inútil.",
        "nivel": "elite"
    },
    {
        "id": 1046,
        "categoria": "criptografia",
        "enunciado": "Qual destes NÃO é um algoritmo de hash?",
        "alternativas": [
            "MD5",
            "SHA-1",
            "AES",
            "SHA-3"
        ],
        "respostaCorreta": 2,
        "explicacao": "AES é criptografia (reversível com a chave). Hash é one-way (irreversível).",
        "nivel": "elite"
    },
    {
        "id": 1047,
        "categoria": "criptografia",
        "enunciado": "Na criptografia de chave pública, a Chave Privada deve ser:",
        "alternativas": [
            "Compartilhada com amigos",
            "Mantida em segredo absoluto pelo dono",
            "Postada no site",
            "Enviada por email"
        ],
        "respostaCorreta": 1,
        "explicacao": "Se vazar a privada, a identidade e a segurança acabam.",
        "nivel": "elite"
    },
    {
        "id": 1048,
        "categoria": "criptografia",
        "enunciado": "O que é criptoanálise?",
        "alternativas": [
            "Criar códigos",
            "A ciência de analisar e quebrar códigos/cifras, encontrando fraquezas matemáticas",
            "Usar bitcoin",
            "Fazer backup criptografado"
        ],
        "respostaCorreta": 1,
        "explicacao": "É o ataque matemático à criptografia.",
        "nivel": "elite"
    },
    {
        "id": 1049,
        "categoria": "criptografia",
        "enunciado": "Qual a vantagem das Curvas Elípticas (ECC) sobre o RSA?",
        "alternativas": [
            "São mais fáceis de explicar",
            "Oferecem o mesmo nível de segurança com chaves MUITO menores (ex: 256-bit ECC ~ 3072-bit RSA), sendo mais rápidas e eficientes",
            "São algoritmos simétricos",
            "Não precisam de chaves"
        ],
        "respostaCorreta": 1,
        "explicacao": "Ideal para celulares e IoT devido ao baixo consumo de processamento.",
        "nivel": "elite"
    },
    {
        "id": 1050,
        "categoria": "criptografia",
        "enunciado": "O que é um \"Ataque de Força Bruta\"?",
        "alternativas": [
            "Bater no computador",
            "Testar todas as combinações possíveis de chaves ou senhas até encontrar a correta",
            "Engenharia Social",
            "SQL Injection"
        ],
        "respostaCorreta": 1,
        "explicacao": "A única defesa é tornar o espaço de chaves tão grande que o universo acabe antes do teste terminar.",
        "nivel": "elite"
    },
    {
        "id": 1051,
        "categoria": "criptografia",
        "enunciado": "Qual modo de operação de cifra de bloco é considerado inseguro por vazar padrões visuais (como o Pinguim do Linux)?",
        "alternativas": [
            "CBC (Cipher Block Chaining)",
            "ECB (Electronic Codebook)",
            "GCM (Galois/Counter Mode)",
            "CTR (Counter)"
        ],
        "respostaCorreta": 1,
        "explicacao": "ECB cifra blocos idênticos de forma idêntica. Em uma imagem, áreas de cor sólida geram padrões repetidos visíveis.",
        "nivel": "elite"
    },
    {
        "id": 1052,
        "categoria": "criptografia",
        "enunciado": "O que é \"Non-Repudiation\" (Não-Repúdio)?",
        "alternativas": [
            "Garantia de entrega",
            "Garantia de que o remetente não pode negar ter enviado a mensagem (provido por Assinatura Digital)",
            "Criptografia forte",
            "Backup"
        ],
        "respostaCorreta": 1,
        "explicacao": "Se está assinado com sua chave privada, foi você. Não pode dizer \"fui hackeado\" sem provar o roubo da chave.",
        "nivel": "elite"
    },
    {
        "id": 1053,
        "categoria": "criptografia",
        "enunciado": "O que é SSL Strip?",
        "alternativas": [
            "Um show",
            "Um ataque MitM que força o navegador da vítima a conectar via HTTP em vez de HTTPS",
            "Um erro de certificado",
            "Uma ferramenta de limpeza"
        ],
        "respostaCorreta": 1,
        "explicacao": "O atacante intercepta o pedido HTTPS e devolve HTTP para a vítima, lendo tudo em claro.",
        "nivel": "elite"
    },
    {
        "id": 1054,
        "categoria": "criptografia",
        "enunciado": "Para proteger senhas, deve-se usar criptografia reversível ou hash?",
        "alternativas": [
            "Criptografia reversível",
            "Hash com Salt",
            "Texto plano",
            "XOR simples"
        ],
        "respostaCorreta": 1,
        "explicacao": "Senhas não devem ser reversíveis. O sistema apenas compara o hash da entrada com o hash salvo.",
        "nivel": "elite"
    },
    {
        "id": 1055,
        "categoria": "criptografia",
        "enunciado": "O que é PBKDF2?",
        "alternativas": [
            "Um robô",
            "Uma função de derivação de chave (KDF) que aplica hash milhares de vezes (stretching) para tornar o brute-force de senhas lento",
            "Um algoritmo de compressão",
            "Um protocolo de rede"
        ],
        "respostaCorreta": 1,
        "explicacao": "Deixa o hash lento propositalmente (ex: 0.1s) para que o atacante só consiga testar 10 senhas/segundo em vez de 1 bilhão.",
        "nivel": "elite"
    },
    {
        "id": 1056,
        "categoria": "sistemas",
        "enunciado": "No Linux, o que faz o comando \"grep\"?",
        "alternativas": [
            "Remove arquivos",
            "Busca por padrões de texto dentro de arquivos (Global Regular Expression Print)",
            "Lista processos",
            "Muda permissões"
        ],
        "respostaCorreta": 1,
        "explicacao": "Ferramenta essencial de filtragem. Ex: cat log.txt | grep \"Error\".",
        "nivel": "elite"
    },
    {
        "id": 1057,
        "categoria": "sistemas",
        "enunciado": "Qual a diferença entre Soft Link e Hard Link no Linux?",
        "alternativas": [
            "Nenhuma",
            "Soft Link é um atalho (se apagar o original, quebra); Hard Link aponta para o mesmo inode (se apagar um, o outro continua existindo)",
            "Hard Link é para Windows",
            "Soft Link é mais rápido"
        ],
        "respostaCorreta": 1,
        "explicacao": "Hard Link é como ter dois nomes oficiais para o mesmo arquivo físico.",
        "nivel": "elite"
    },
    {
        "id": 1058,
        "categoria": "sistemas",
        "enunciado": "O que são \"Permissões SUID\" em um binário Linux?",
        "alternativas": [
            "Permissão de suar",
            "Bit especial que faz o programa rodar com as permissões do DONO do arquivo (geralmente root) e não do usuário que o executou",
            "Vírus",
            "Erro de disco"
        ],
        "respostaCorreta": 1,
        "explicacao": "Perigoso. Se o comando `ping` tem SUID root, ele roda como root mesmo se eu (user comum) o chamar. Se tiver bug, viro root.",
        "nivel": "elite"
    },
    {
        "id": 1059,
        "categoria": "sistemas",
        "enunciado": "No Windows, o comando \"ipconfig /release\" faz o quê?",
        "alternativas": [
            "Mostra o IP",
            "Libera o endereço IP atual obtido via DHCP, ficando sem IP",
            "Renova o IP",
            "Limpa o DNS"
        ],
        "respostaCorreta": 1,
        "explicacao": "/release solta o IP. /renew pede um novo.",
        "nivel": "elite"
    },
    {
        "id": 1060,
        "categoria": "sistemas",
        "enunciado": "O que é \"Swap\" ou \"Memória Virtual\"?",
        "alternativas": [
            "Memória da placa de vídeo",
            "Espaço em disco usado como extensão da memória RAM quando esta se esgota",
            "Cache L1",
            "Memória ROM"
        ],
        "respostaCorreta": 1,
        "explicacao": "Evita travamento por falta de RAM, mas é milhares de vezes mais lenta que a RAM (Disco/SSD Thrashing).",
        "nivel": "elite"
    },
    {
        "id": 1061,
        "categoria": "sistemas",
        "enunciado": "Qual sistema de arquivos Linux suporta Journaling e é o padrão na maioria das distros?",
        "alternativas": [
            "FAT32",
            "EXT4",
            "NTFS",
            "ISO9660"
        ],
        "respostaCorreta": 1,
        "explicacao": "EXT4 é robusto e journaling previne corrupção em quedas de energia.",
        "nivel": "elite"
    },
    {
        "id": 1062,
        "categoria": "sistemas",
        "enunciado": "Qual comando Linux altera o dono de um arquivo?",
        "alternativas": [
            "chmod",
            "chown",
            "ls -l",
            "passwd"
        ],
        "respostaCorreta": 1,
        "explicacao": "chown (Change Owner).",
        "nivel": "elite"
    },
    {
        "id": 1063,
        "categoria": "sistemas",
        "enunciado": "O que é o \"Active Directory\" (AD)?",
        "alternativas": [
            "Uma pasta de arquivos",
            "Serviço de diretório da Microsoft para gerenciamento centralizado de identidades, autenticação e políticas em domínios Windows",
            "Um antivírus",
            "Um site"
        ],
        "respostaCorreta": 1,
        "explicacao": "O coração de redes corporativas Windows. Controla Users, Computers, GPOs.",
        "nivel": "elite"
    },
    {
        "id": 1064,
        "categoria": "sistemas",
        "enunciado": "O que faz o comando \"sudo\"?",
        "alternativas": [
            "Sudoku",
            "SuperUser DO. Executa um comando com privilégios elevados (root) temporariamente",
            "Sair do sistema",
            "Suspender o PC"
        ],
        "respostaCorreta": 1,
        "explicacao": "Permite administração sem logar como root.",
        "nivel": "elite"
    },
    {
        "id": 1065,
        "categoria": "sistemas",
        "enunciado": "Qual o PID padrão do processo \"System\" ou \"Idle\" no Windows?",
        "alternativas": [
            "0 e 4",
            "100 e 200",
            "1 e 2",
            "999 e 1000"
        ],
        "respostaCorreta": 0,
        "explicacao": "System Idle Process é PID 0. System é PID 4.",
        "nivel": "elite"
    },
    {
        "id": 1066,
        "categoria": "sistemas",
        "enunciado": "O que é \"PowerShell\"?",
        "alternativas": [
            "Um carregador de bateria",
            "Shell de linha de comando e linguagem de script da Microsoft baseada em objetos (.NET), poderosa para automação e administração",
            "Um jogo",
            "Um editor de texto"
        ],
        "respostaCorreta": 1,
        "explicacao": "Muito mais poderoso que o CMD antigo. Usado para tudo em Windows Admin e Pentest.",
        "nivel": "elite"
    },
    {
        "id": 1067,
        "categoria": "sistemas",
        "enunciado": "No Linux, o que significa o símbolo \"~\" (til)?",
        "alternativas": [
            "Erro",
            "O diretório home do usuário atual (/home/usuario)",
            "Raiz do sistema",
            "Arquivo temporário"
        ],
        "respostaCorreta": 1,
        "explicacao": "cd ~  vai para casa.",
        "nivel": "elite"
    },
    {
        "id": 1068,
        "categoria": "sistemas",
        "enunciado": "Qual o arquivo no Linux que armazena os hashes das senhas dos usuários?",
        "alternativas": [
            "/etc/passwd",
            "/etc/shadow",
            "/etc/group",
            "/var/log/auth.log"
        ],
        "respostaCorreta": 1,
        "explicacao": "/etc/passwd é legível por todos (tem infos de usuário). /etc/shadow é legível só por root (tem as senhas).",
        "nivel": "elite"
    },
    {
        "id": 1069,
        "categoria": "sistemas",
        "enunciado": "Qual a diferença entre Processo e Thread?",
        "alternativas": [
            "Nenhuma",
            "Processo é um programa em execução (espaço de memória isolado); Thread é uma unidade de execução leve dentro de um processo (compartilha memória)",
            "Thread é mais lenta",
            "Processo é hardware"
        ],
        "respostaCorreta": 1,
        "explicacao": "Threads compartilham o mesmo DNA (memória) do processo pai. Processos são vizinhos isolados.",
        "nivel": "elite"
    },
    {
        "id": 1070,
        "categoria": "sistemas",
        "enunciado": "O que é UEFI?",
        "alternativas": [
            "Um formato de imagem",
            "Unified Extensible Firmware Interface. O sucessor moderno da BIOS, suportando Secure Boot, discos maiores (>2TB) e interface gráfica",
            "Um tipo de USB",
            "Um vírus de boot"
        ],
        "respostaCorreta": 1,
        "explicacao": "A \"BIOS\" moderna.",
        "nivel": "elite"
    },
    {
        "id": 1071,
        "categoria": "ingles",
        "enunciado": "Read the error: \"Connection timed out\". What does it imply?",
        "alternativas": [
            "Success",
            "The server did not respond within the allowed time limit (packet drop or heavy lag)",
            "Wrong password",
            "Server refused connection"
        ],
        "respostaCorreta": 1,
        "explicacao": "Timed out = O relógio correu e ninguém atendeu. Geralmente Firewall dropando pacotes.",
        "nivel": "elite"
    },
    {
        "id": 1072,
        "categoria": "ingles",
        "enunciado": "Translate: \"The system creates a backup daily at midnight.\"",
        "alternativas": [
            "O sistema trava todo dia.",
            "O sistema cria uma cópia de segurança diariamente à meia-noite.",
            "O sistema deleta arquivos.",
            "O sistema reinicia."
        ],
        "respostaCorreta": 1,
        "explicacao": "Backup = Cópia de segurança. Daily = Diariamente. Midnight = Meia-noite.",
        "nivel": "elite"
    },
    {
        "id": 1073,
        "categoria": "ingles",
        "enunciado": "In the logs: \"Access Denied: Isufficient Privileges\". What is the issue?",
        "alternativas": [
            "Network error",
            "The user does not have enough permission/rights to perform the action.",
            "Disk full",
            "Bad password"
        ],
        "respostaCorreta": 1,
        "explicacao": "Privileges/Rights = Permissões.",
        "nivel": "elite"
    },
    {
        "id": 1074,
        "categoria": "ingles",
        "enunciado": "What does \"Gateway\" mean in networking?",
        "alternativas": [
            "A gate of a house",
            "A device (router) that acts as an entrance/exit point to another network (usually the Internet).",
            "A game",
            "A cable"
        ],
        "respostaCorreta": 1,
        "explicacao": "Gateway = Portão de Rede.",
        "nivel": "elite"
    },
    {
        "id": 1075,
        "categoria": "ingles",
        "enunciado": "What is a \"Bug\"?",
        "alternativas": [
            "An insect",
            "Here: An error, flaw or fault in a computer program or system that causes it to produce an incorrect result.",
            "A feature",
            "A virus"
        ],
        "respostaCorreta": 1,
        "explicacao": "Termo técnico para falha de código.",
        "nivel": "elite"
    },
    {
        "id": 1076,
        "categoria": "ingles",
        "enunciado": "Translate \"Query\" in database context.",
        "alternativas": [
            "Fila",
            "Consulta (pedido de informação ao banco de dados).",
            "Dúvida",
            "Erro"
        ],
        "respostaCorreta": 1,
        "explicacao": "SQL Query = Consulta SQL.",
        "nivel": "elite"
    },
    {
        "id": 1077,
        "categoria": "ingles",
        "enunciado": "Technical term for \"Software Malicioso\".",
        "alternativas": [
            "Goodware",
            "Malware",
            "Spyware only",
            "Hardware"
        ],
        "respostaCorreta": 1,
        "explicacao": "Malware = Malicious Software.",
        "nivel": "elite"
    },
    {
        "id": 1078,
        "categoria": "ingles",
        "enunciado": "What does \"Default\" mean in \"Default Settings\"?",
        "alternativas": [
            "Broken",
            "Pre-selected / Factory settings that apply if the user does not change them.",
            "Faulty",
            "Delete"
        ],
        "respostaCorreta": 1,
        "explicacao": "Padrão de fábrica.",
        "nivel": "elite"
    },
    {
        "id": 1079,
        "categoria": "ingles",
        "enunciado": "Translate: \"Ensure the firewall rules allow inbound traffic on port 80.\"",
        "alternativas": [
            "Garanta que o firewall bloqueie a porta 80.",
            "Garanta que as regras de firewall permitam tráfego de entrada na porta 80.",
            "Desligue o firewall.",
            "Permita saida na porta 80."
        ],
        "respostaCorreta": 1,
        "explicacao": "Inbound = Entrada. Allow = Permitir.",
        "nivel": "elite"
    },
    {
        "id": 1080,
        "categoria": "ingles",
        "enunciado": "What is the \"Cloud\"?",
        "alternativas": [
            "Rain",
            "Remote servers accessible over the Internet that store data and run applications (Someone else's computer).",
            "A disk",
            "A local network"
        ],
        "respostaCorreta": 1,
        "explicacao": "Nuvem = Servidores remotos.",
        "nivel": "elite"
    },
    {
        "id": 1081,
        "categoria": "ingles",
        "enunciado": "If a device is \"Offline\", it is:",
        "alternativas": [
            "Connected",
            "Disconnected from the network/internet.",
            "Broken permanently",
            "Off"
        ],
        "respostaCorreta": 1,
        "explicacao": "Offline = Desconectado.",
        "nivel": "elite"
    },
    {
        "id": 1082,
        "categoria": "ingles",
        "enunciado": "What does \"Firmware\" mean?",
        "alternativas": [
            "Soft clothing",
            "Permanent software programmed into a read-only memory of a hardware device (low-level control).",
            "Hard drive",
            "Antivirus"
        ],
        "respostaCorreta": 1,
        "explicacao": "Software embarcado no hardware.",
        "nivel": "elite"
    },
    // ================================
    // Questões de Python (Pareto) - Nível Base
    // ================================
    {
        "id": 2001,
        "categoria": "python",
        "enunciado": "Qual função Python imprime uma mensagem no console?",
        "alternativas": [
            "print()",
            "echo()",
            "printf()",
            "imprimir()"
        ],
        "respostaCorreta": 0,
        "explicacao": "A função print() é usada para exibir mensagens e variáveis no console.",
        "nivel": "base"
    },
    {
        "id": 2002,
        "categoria": "python",
        "enunciado": "Qual biblioteca Python é amplamente utilizada para realizar requisições HTTP/HTTPS de forma simples?",
        "alternativas": [
            "requests",
            "urllib",
            "socket",
            "http.client"
        ],
        "respostaCorreta": 0,
        "explicacao": "A biblioteca requests simplifica requisições HTTP com métodos GET, POST e gerenciamento de sessões.",
        "nivel": "base"
    },
    {
        "id": 2003,
        "categoria": "python",
        "enunciado": "Em Python, qual estrutura de dados é apropriada para armazenar pares chave-valor?",
        "alternativas": [
            "list",
            "set",
            "dictionary",
            "tuple"
        ],
        "respostaCorreta": 2,
        "explicacao": "O dicionário (dict) armazena pares chave-valor acessados por chave.",
        "nivel": "base"
    },
    {
        "id": 2004,
        "categoria": "python",
        "enunciado": "Qual comando Python é utilizado para instalar pacotes de terceiros a partir do PyPI?",
        "alternativas": [
            "pip install",
            "python -m install",
            "apt-get install",
            "pkg install"
        ],
        "respostaCorreta": 0,
        "explicacao": "'pip install pacote' usa o gerenciador de pacotes pip para baixar e instalar bibliotecas.",
        "nivel": "base"
    },
    {
        "id": 2005,
        "categoria": "python",
        "enunciado": "Qual módulo padrão do Python permite criar um servidor HTTP simples com um único comando de terminal?",
        "alternativas": [
            "http.server",
            "socketserver",
            "wsgiref",
            "ftplib"
        ],
        "respostaCorreta": 0,
        "explicacao": "O módulo http.server pode ser executado com 'python3 -m http.server' para servir arquivos via HTTP.",
        "nivel": "base"
    },
    // ================================
    // Questões de Python (Pareto) - Nível Elite
    // ================================
    {
        "id": 2006,
        "categoria": "python",
        "enunciado": "Qual biblioteca Python é mais adequada para capturar, analisar e manipular pacotes de rede em nível baixo para fins de segurança?",
        "alternativas": [
            "scapy",
            "pandas",
            "matplotlib",
            "numpy"
        ],
        "respostaCorreta": 0,
        "explicacao": "Scapy permite construir e decodificar pacotes, sniffar tráfego e executar testes de intrusão controlados.",
        "nivel": "elite"
    },
    {
        "id": 2007,
        "categoria": "python",
        "enunciado": "Para calcular o hash SHA-256 de um arquivo em Python (para verificação de integridade), qual módulo da biblioteca padrão deve ser utilizado?",
        "alternativas": [
            "hashlib",
            "crypto",
            "secrets",
            "random"
        ],
        "respostaCorreta": 0,
        "explicacao": "O módulo hashlib fornece funções de hash criptográficas como SHA-1, SHA-256 e MD5.",
        "nivel": "elite"
    },
    {
        "id": 2008,
        "categoria": "python",
        "enunciado": "Ao usar a biblioteca requests, qual atributo do objeto Response retorna o código de status HTTP?",
        "alternativas": [
            "status_code",
            "code",
            "status",
            "statusCode"
        ],
        "respostaCorreta": 0,
        "explicacao": "Em requests, response.status_code contém o código HTTP (por exemplo 200, 404).",
        "nivel": "elite"
    },
    {
        "id": 2009,
        "categoria": "python",
        "enunciado": "Qual comando cria um servidor HTTP Python temporário na porta 8000 usando python3?",
        "alternativas": [
            "python3 -m http.server 8000",
            "python3 -c http.server",
            "python3 -m SimpleHTTPServer 8000",
            "python3 server.py"
        ],
        "respostaCorreta": 0,
        "explicacao": "Executar 'python3 -m http.server 8000' inicia um servidor HTTP local na porta 8000 usando o módulo http.server.",
        "nivel": "elite"
    },
    {
        "id": 2010,
        "categoria": "python",
        "enunciado": "O que a função os.path.join('/etc', 'passwd') retorna em um sistema Unix?",
        "alternativas": [
            "\"/etc/passwd\"",
            "\"/etc//passwd\"",
            "\"/etc:passwd\"",
            "\"/etc\\\\passwd\""
        ],
        "respostaCorreta": 0,
        "explicacao": "os.path.join concatena caminhos de forma apropriada, retornando '/etc/passwd' em sistemas Linux/Unix.",
        "nivel": "elite"
    }
    ,
    // ================================
    // Questões adicionais (Elite) para reforçar o modo Tropa de Elite
    // Estas questões abordam conceitos mais avançados e exigem raciocínio crítico.
    // ================================
    {
        "id": 3001,
        "categoria": "redes",
        "enunciado": "Em um projeto de backbone de provedores de internet, é necessário trocar rotas entre sistemas autônomos diferentes. Qual protocolo de roteamento atende a esse requisito, utilizando um mecanismo de vetor de caminho (Path Vector) e atributos de rota para tomada de decisão, e é projetado para roteamento entre domínios?",
        "alternativas": [
            "OSPF – protocolo link‑state para roteamento intra‑domínio",
            "RIP – protocolo de vetor de distância para pequenas redes",
            "EIGRP – protocolo híbrido proprietário da Cisco",
            "BGP – protocolo de vetor de caminho para roteamento interdomínios"
        ],
        "respostaCorreta": 3,
        "explicacao": "O BGP (Border Gateway Protocol) é usado para roteamento entre sistemas autônomos (inter‑domínios). Conforme explicado, o OSPF encontra o melhor caminho dentro de um domínio usando o algoritmo de Dijkstra, enquanto o BGP usa um mecanismo de vetor de caminho e atributos de rota para selecionar caminhos entre diferentes redes autônomas【15040350470232†L27-L87】. O BGP é escalável e permite políticas de roteamento, mas converge mais lentamente que o OSPF.",
        "nivel": "elite"
    },
    {
        "id": 3002,
        "categoria": "protocolos",
        "enunciado": "Durante um handshake TLS/SSL tradicional (versão 1.2 com algoritmo RSA), qual é a primeira mensagem enviada pelo cliente e o que ela contém?",
        "alternativas": [
            "'Client Hello': inclui a versão do protocolo TLS compatível, a lista de conjuntos de cifras suportados e um número aleatório gerado pelo cliente",
            "'Server Hello': inclui o certificado digital do servidor, o conjunto de cifras escolhido e um número aleatório gerado pelo servidor",
            "'Client Key Exchange': inclui o segredo pré‑mestre cifrado com a chave pública do servidor",
            "'Finished': mensagem final enviada pelo cliente com a chave de sessão"
        ],
        "respostaCorreta": 0,
        "explicacao": "No handshake TLS 1.2, a primeira etapa é o envio do \"Client Hello\" pelo cliente, contendo a versão do protocolo, uma lista de cifras suportadas e um número aleatório (client random). O servidor então responde com um \"Server Hello\" e seu certificado. Essas etapas estabelecem parâmetros iniciais para a sessão segura【34141324056675†L465-L472】.",
        "nivel": "elite"
    },
    {
        "id": 3003,
        "categoria": "criptografia",
        "enunciado": "Na prática de segurança da informação, qual é a diferença fundamental entre criptografia simétrica e criptografia assimétrica?",
        "alternativas": [
            "A criptografia simétrica utiliza uma única chave compartilhada entre emissor e receptor, enquanto a criptografia assimétrica utiliza um par de chaves (pública e privada) matematicamente relacionadas",
            "A criptografia simétrica é sempre mais lenta e complexa do que a criptografia assimétrica",
            "A criptografia assimétrica não requer troca de chaves e não usa funções matemáticas",
            "A criptografia simétrica garante irretratabilidade, enquanto a criptografia assimétrica não"
        ],
        "respostaCorreta": 0,
        "explicacao": "Conforme descrito, a criptografia simétrica utiliza uma única chave secreta compartilhada entre emissor e receptor para cifrar e decifrar dados. Já a criptografia assimétrica utiliza um par de chaves — uma pública (divulgada) e uma privada (mantida em segredo). Uma mensagem cifrada com uma chave só pode ser decifrada com a outra correspondente【494649128981603†L169-L211】.",
        "nivel": "elite"
    },
    {
        "id": 3004,
        "categoria": "sistemas",
        "enunciado": "Em ambientes concorrentes, como se diferencia um mutex de um semáforo?",
        "alternativas": [
            "O mutex implementa exclusão mútua com propriedade: somente a thread que o bloqueia pode desbloqueá‑lo, enquanto o semáforo é um mecanismo de sinalização baseado em contador que permite múltiplas threads executarem sinais e esperas",
            "O mutex é usado para sinalização entre threads e permite contagem maior que 1, enquanto o semáforo é sempre binário e só permite uma thread",
            "O semáforo não possui contador interno e não é utilizado para sincronização, apenas para exibir mensagens no terminal",
            "Mutex e semáforo são equivalentes e podem ser usados de forma intercambiável sem diferenças de propriedade"
        ],
        "respostaCorreta": 0,
        "explicacao": "Mutexes e semáforos são mecanismos de sincronização do kernel. Um mutex (Mutual Exclusion) proporciona exclusão mútua: somente a thread que adquiriu o mutex pode liberá‑lo, garantindo acesso exclusivo à região crítica. O semáforo é uma variável inteira que pode controlar acesso de múltiplas threads através das operações wait() e signal(); ele não impõe propriedade estrita, e qualquer thread pode sinalizar, permitindo coordenação para recursos múltiplos【248605909754243†L27-L100】.",
        "nivel": "elite"
    },
    {
        "id": 3005,
        "categoria": "python",
        "enunciado": "No framework de manipulação de pacotes Scapy, qual função envia um pacote de camada 3 e retorna apenas a primeira resposta recebida, ao passo que sua variante para camada 2 utiliza uma função diferente?",
        "alternativas": [
            "sr1() – envia pacotes de camada 3 (IP) e retorna a primeira resposta",
            "sniff() – captura tráfego e retorna a primeira resposta",
            "srp() – envia pacotes de camada 3 e retorna a primeira resposta",
            "sendp() – envia pacotes de camada 3 e retorna respostas"
        ],
        "respostaCorreta": 0,
        "explicacao": "A documentação do Scapy afirma que a função sr1() envia um pacote ou conjunto de pacotes de camada 3 (IP, ARP) e retorna apenas um pacote de resposta. Para pacotes de camada 2 (Ethernet), a função equivalente é srp(). Se não houver resposta, sr1() retorna None após o timeout【648642339120586†L1106-L1114】.",
        "nivel": "elite"
    },
    {
        "id": 3006,
        "categoria": "ingles",
        "enunciado": "Qual afirmação diferencia corretamente um ataque de Cross‑Site Scripting (XSS) de um ataque de SQL Injection?",
        "alternativas": [
            "XSS injeta código JavaScript no lado do cliente para comprometer navegadores de usuários, enquanto SQL Injection injeta comandos SQL em campos de entrada para manipular bancos de dados",
            "SQL Injection usa JavaScript no navegador, enquanto XSS executa comandos SQL diretamente no banco de dados",
            "Ambos os ataques ocorrem apenas no lado do servidor e não envolvem navegadores",
            "XSS e SQL Injection são sinônimos e referem‑se à mesma técnica de ataque"
        ],
        "respostaCorreta": 0,
        "explicacao": "XSS (Cross‑site Scripting) permite que um invasor injete scripts JavaScript maliciosos em páginas web, executados no navegador das vítimas para roubar cookies ou modificar conteúdo. SQL Injection utiliza instruções SQL inseridas em campos de entrada para manipular consultas ao banco de dados e acessar informações sensíveis【612829038951937†L36-L65】.",
        "nivel": "elite"
    }
];

const cenarios = [
    {
        "id": "lab-01",
        "titulo": "Falha de Conectividade Web",
        "descricao": "Usuários reclamam que não conseguem acessar o servidor web interno (192.168.1.50). O servidor responde ao Ping.",
        "nivel": "pratico",
        "simulacao": {
            "tipo": "terminal",
            "solucao": "service apache2 start",
            "dica": "Verifique se o serviço web está rodando.",
            "logs": [
                "[error] connect() failed: Connection refused",
                "Service apache2 is NOT running."
            ]
        }
    },
    {
        "id": "lab-02",
        "titulo": "Permissões Inseguras",
        "descricao": "O arquivo /etc/shadow está legível para todos os usuários. Corrija isso.",
        "nivel": "pratico",
        "simulacao": {
            "tipo": "terminal",
            "solucao": "chmod 600 /etc/shadow",
            "dica": "Apenas o root deve ler/escrever neste arquivo.",
            "logs": []
        }
    }
];

if (typeof window !== 'undefined') {
    window.questoes = questoes;
    window.cenarios = cenarios;
}
if (typeof module !== 'undefined') {
    module.exports = { questoes, cenarios };
}
