import Page from "@/components/Page";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { black, red } from "@/styles";
import { faq } from "@/lib/faq";

const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Page title="Câu hỏi thường gặp">
      <Stack direction="column" spacing={2} mb={10}>
        {faq.map((item, index) => (
          <Accordion
            elevation={2}
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{ borderRadius: "8px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: expanded === `panel${index}` ? red[100] : black,
                  }}
                />
              }
            >
              <Typography
                fontSize={18}
                fontWeight={500}
                color={expanded === `panel${index}` ? red[100] : black}
                sx={{
                  "&:hover": {
                    color: red[100],
                  },
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                fontSize={"14px !important"}
                fontWeight={500}
                color={black}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Page>
  );
};

export default Faq;
