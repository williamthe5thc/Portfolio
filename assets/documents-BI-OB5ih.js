const t=s=>/\.pdf$/i.test(s.split(/[?#]/)[0]),n="#view=FitH&navpanes=0&pagemode=none&zoom=page-width",o=s=>t(s)&&!s.includes("#")?`${s}${n}`:s;export{o as d,t as i};
