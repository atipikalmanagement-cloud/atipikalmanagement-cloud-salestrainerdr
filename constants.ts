
import { Goal } from './types';

export const LOGO_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAABCCAYAAAAlNiv9AAAIQklEQVR4nO2d608bRxTHL7FF8pJs+yJsYh/HcYsbwSgwxigx8UETBEnz4E2hIeARQqEFRW8kHgW86UGLpvEgHjxpaaCg8eBJTSsIIYHgAQKjGPEHnsEjnkFjiD/gwz+Qh45zOztzZ2d2Hjg4yFfW5M3OzM7O/N5r92ZnZ4iY2Hnnnbfb3/72t1v/d/+YMWPGOO+883Z9ff3/23/913/dPnbs2G5ubu7m/5tZ0+eff77t3Lnzdnt7e29vb29vPzz+9Kc/3T7/+c9v/+t//S/bxYsXt9ra2tqDBw9ub29vb7h43rx59uDBg9v333+/ra2t7fnz59tVVVXt7u7u1tZWZsyYMfbss8/udnZ29iuvvLKTJ09uTzzxRBs5cmTbv39/e/bZZ9vZZ5/d7ty5s/3Hf/xH+/TTT7cvv/xy++ijj7ZLLrlke+ihh7Ybb7yxPfzww+2FF17Y/vqv/3r767/+q20u87nPP/98+/DDD7cbb7yxPfDAA9s//+//tT3xxBPtww8/vP3kJz/Znnrqqa2trS3nzp3b/vjHP26//e1vt8suu2T75S9/uZ177rntpZde2n784x+3jz76aPvss8+2tWvXtt27d2+//OUvt3Xr1m3Lli1bHnrooe0HP/hB+/jjj9utt97aPvvsM+2ss85q165du3379u2eeOIJe+GFF7annnqqfeihh7annnqqfeihh/bTn/50O3PmjO3EE09sX3/99Xb++efbiSee2G666ab21FNPhT3wwAPb/v3727/+67+2Tz75ZNuxY8d28+bN7e7u7vbs2bM9++yz7csvv9xee+21/ehHP9reeuut7dNPP90eeOChHXr0t7/9bXvkkUe2jz/+ePvLX/6y/eQnP9l+8pOfbM8//3z71a9+tT3wwAPtO++8s33xi19sr7322nbmmWfW6enpPfjgg3v//v3bGWec0c4777x28uTJ/eMf/7jdf//9e/vtt+/JJ5/c7t27tyeeeGL74he/2D7/+c/vNddc095zzz174okntuuvv34744wz2tNPP70dffTRnXvuuedefvnl7eGHH96eeuqpeeutt/bQQw9t9913X3v55Zf3L//yL3v33Xfv448/vj3zzDP71a9+tT3++OPtueee255++um98MIL+/Wvf73t379/++IXv9jee++9++yzz3bXXXftp59+ut1888277bbbdvPNN+/xxx/fp59+uh133HHtlltu2T744IN2++2372mnndZOOeWU9rWvfW077LBD++KLL9rrrbfeFVdc0a6//vr2+9//frv99tv3q1/9ajvqqKPaRRddtB1wwAHtP//zP/dXXnnl/f3vf99+/vOf7/PPP7/dfffd99RTT/VTTz3Vfvjhh+2yyy7brrvuum+++WYnnnhieeCBB7anS/nwww/bTTfdVB7z+OOPtxNOOKH94he/2L7++us99dRT+/GPf9xOOeWU9vbbb29nn312e/LJJ/frX/96e/fdd3dHH310O/roo9tVV13V3n//ffv1r3+9fe1rX9uOPPJI++c//7nt2LFje/XVV+u///u/tyOPPLJ99NFH94tf/GInnnhi+8c//rG9/PLL+/7779+OPfbYvva1r+2ee+5Znnnmme1HP/pRe/TRR3ci15/+9Kfthhtu2E477bT2/PPPb3fccUeffPLJdsghh7T/+I//sJ1//vl79913t3Xr1rWvf/3rO+CAA/azn/1se/vtt3cPPvhge/fdd/db3/pWO/jgg/v1r3+9ffnLX+4333xz+8tf/nL7/PPP92mnnVZ+8YtfrB///Od3Tz/9dGdlZR+8sJz122+//fbbb7/dvv7663bNNdfshhtu2L388svtlltu2V5++eV2++237znnnNNuv/32feGFF/Z3v/vdduONN+4DDzzQbrivvvrqrrnmmu2mm27a7r///t12223bbbbZZnvooYe2z3/+8/bQQw9tZ511VhswYMD2+OOP99tvv71de+21O3/+/Pbkk09ujzzyp7/85S/3X//1X/uFF16IfPDggw/aT3/60zZgwIDtU350L6t+/OMfb3/5y1/24IMP7meeeWY77bTT9oUXXtjOO++89vrrr9cHHnjgnnvuue0Tn/hEe+WVV7YvfvGLLV7e//znP+9f//pX7ZFHHlmeeuqp7cEHH9wOP/zw/umnn/bVV1/dDjrooHbQQQe1Y445ZpvL7GuvvXb78Y9/vL388st76qmn9meffbb96le/Wq6//vq95557tmeffXY74YQT9i9/+Ut79tln2znnnNMuu+yybd68eVtYWNj++Mc/7ve//317++23t2uvvXa78cYb96GHHto+/PDD/f73v9++9NJL90tf+lJ74IEHdg8++GD7wQ9+sE0s/sc//nG76aab9r3vfW/73ve+tx1wwAHbQw89tD3wwAPbn/70p9kxxxzTbkyvfvWrbdmyZWv9+vX78Y9/vD3xxBPb+++/v91zzz3bU089tT3xxBN76qmn9ocffri9+eab98knn9x+85vfbK+88sqeOHFix3z84x9vf/vb3zYYsOuuu+4ee+yxbbvttlt33nln+9Of/rR+/vOf7xNOOKFt3Lhx33333T3xxBO7Rx99tN155517zz33bMcee2x76qmn9qc//el+9KMfbY8++uj25Zdf3t5888299NJL+/DDD+/ZZ5/dHnnkkX3mmWf2ww8/vJ133nnthRde2N74448//vh266237gsvvLCdfvrp/bOf/Wy74YYbtttuu23/+te/tnfffXfbf//9e9NNN+33339/W7du3XbdddfdZZdddj/96U+3O+64o73yyivbBx98sH3ve9/bDj744HbkkUf2mmuu2Q466KD94Ac/2L744ou2fv363W233XYPOuig9tJLL+2f/vSn7cILL9yeffbZfeCBB/bBBx9sDz/88Jq1v//+e+M+++wz9I9//GPbe++9u7PPPru9+eabd/78+e2KK67YnnzyybZ69ert61//+jZixIi2fv36bdu2bXtqaJ955pndc889tz3yyCPtgQceyD6t7bTTTrvLLrtse/LJJ7dnn312e/fdd/drX/ta+/bbb7d///59//79+6mnntruvvvu7Qc/+MG2cePGuummm/bhhx/u999/v91xxx27+eab95vf/GbbvXt3+/jjj++GG27YPvnkkw0iX3fdddvDDz9sO+ecc3bTTTftpZde2g444ID2zTff3P7rv/5r19fXt6uvvtq+//3vtx1yyCGd6t4PPvhge/fdd/ftt9/eDjnkkPbQQw9tTzzxRFuwYMH20EMPbb/97W83GDBnzpydd955++CDD/ZLL7203XTTTXv++ee3H//4x3vmmWfW6enp3XPPPTf1++jRo9sNN9ywXXXVVdvLL79su+GGG/ZPf/pTmzNnzrZu3bqdOHFi27JlS5uWduzYscPbtm3bDj300P7whz9sf//73+9PPvnkXn311e2VV17ZR4s9f/78dt1117Vdu3Y1GDLggAMOuM8++2xnn312+/jjj9utt966fe1rX9uuvvrqvW/fvv3MM8/sTz/9dHvyySe3jz76aLt169Z2+eWXb6eddlp74403dsstt+ymm27aTjrppLbffvvtiSee2DZv3ryNHDmyzcrK6k033bTNzc1tt956azvjjDPa5Zdfvt1222374osv7l133dXGGFwY0/8B7wXjYhQe6oEAAAAASUVORK5CYII=';

export const SALESPERSON_MISSION = `
A missão do vendedor é simular a primeira chamada de qualificação. O vendedor representa a 'Digital Revolution', uma agência de marketing e vendas que ajuda consultores imobiliários a gerar mais leads de compradores e proprietários.

Um lead qualificado cumpre os seguintes critérios:
- Faturação anual de pelo menos 50.000€ (no último ano ou nos últimos 6 meses).
- Mínimo de 1 ano de experiência no mercado imobiliário.
- Vontade de diversificar os seus canais de prospeção.
- Ambição para aumentar a sua faturação.

O vendedor deve:
- Qualificar o lead com base nos critérios acima.
- Estimular a curiosidade.
- Construir uma relação.
- Agendar uma reunião (se o lead for qualificado).
- Terminar a chamada de forma profissional.
`;

export const AI_GENERAL_CONTEXT = `
Informação geral sobre consultores imobiliários como você:
- Os seus métodos de prospeção habituais são porta-a-porta, angariação direta, círculo de influência pessoal e referências.
- Regra geral, não têm muito conhecimento sobre como o marketing digital funciona.
- Normalmente, quando contactam através de um formulário (como neste caso), é porque não estão a conseguir muitas leads e isso deixa-os apreensivos com o futuro.
`;

export const SALES_SCRIPT_GUIDE = `
**Estrutura da chamada que o vendedor tentará seguir:**
1. Apresentação e verificação se o lead se recorda do anúncio.
2. Pedido de permissão para uma conversa rápida.
3. Perguntas de qualificação: experiência, agência, desafios, experiência com marketing digital, faturação.
4. Contextualização da solução da Digital Revolution.
5. Proposta de agendamento de reunião.
6. Confirmação de detalhes e fecho da chamada.
`;

export const GOALS: Goal[] = [
    { id: 'g1', title: 'Completar 5 Roleplays', description: 'Realize cinco simulações de chamada, independentemente do resultado.', achieved: false },
    { id: 'g2', title: 'Atingir 80% de Eficácia', description: 'Obtenha uma pontuação de eficácia de 80% ou superior numa chamada de dificuldade Média ou Difícil.', achieved: false },
    { id: 'g3', title: 'Agendar 3 Reuniões com Leads Qualificados', description: 'Complete com sucesso o objetivo da chamada agendando uma reunião em 3 cenários com leads qualificados.', achieved: false },
    { id: 'g4', title: 'Superar um Cenário Difícil', description: 'Complete um roleplay no nível Difícil com uma pontuação de eficácia acima de 60%.', achieved: false },
];