import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import { Accordion } from "app/components/Accordion";
import { H4 } from "app/components/Typography/Typography";
import {
  AccordionOuterBox,
  InnerAccordion,
  OrderImage,
} from "app/components/CommonCss/CommonCss";
import { DIMENSION2, WEIGHTDIMENSION } from "../../../../../constants";

interface OrderDetailsProps {
  data: any;
  categoryById: any;
}

function BulkOrderItemDetails({ data, categoryById }: OrderDetailsProps) {
  const getLabelFromID = (id: number, list: any[]) => {
    const foundLabel = list.find((item) => item.value === id);
    if (foundLabel) {
      return `(${foundLabel.label.toLowerCase()})`;
    } else {
      return "";
    }
  };

  return (
    <AccordionOuterBox>
      <Accordion
        title={`Order Items - ${data?.OrderNumber || "-"}`}
        defaultExpanded
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <H4 text="Category" />
              <H4
                text={categoryById?.[data?.categoryId] || "-"}
                className="value"
              />
            </Grid>
            <Grid item xs={6}>
              <H4 text="Customer Reference #" />
              <H4
                text={data?.customerReferenceNumber || "-"}
                className="value"
              />
            </Grid>
            <Grid item xs={6}>
              <H4 text="Delivery Options" />
              <H4
                text={
                  data.dropOption === 10
                    ? "Door Drop"
                    : data.dropOption === 11
                    ? "Safe Drop"
                    : "-"
                }
                className="value"
              />
            </Grid>
            <Grid item xs={6}>
              <H4 text="Fragile Order" />
              <H4
                text={
                  data?.items?.filter((item) => item.fragile === 1).length > 0
                    ? "Yes"
                    : "No"
                }
                className="value"
              />
            </Grid>
            <Grid item xs={12}>
              {data?.picture ? (
                <OrderImage src={data?.picture && data?.picture} alt="" />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Box>

        {data?.items?.length > 0 &&
          data?.items.map((item, idx) => {
            return (
              <InnerAccordion key={idx}>
                <Accordion title={`Item #${idx + 1}`}>
                  <Grid container spacing={2}>
                    {!!item.weight && item.weight !== "0" && (
                      <Grid item xs={4}>
                        <H4
                          text={`Weight${getLabelFromID(
                            item.weightDimension,
                            WEIGHTDIMENSION
                          )}`}
                        />
                        <H4 text={item.weight} className="value" />
                      </Grid>
                    )}

                    {item.length > 0 && item.width > 0 && item.height > 0 && (
                      <Grid item xs={4}>
                        <H4
                          text={`LBH${getLabelFromID(
                            item.sizeDimension,
                            DIMENSION2
                          )}`}
                        />
                        <H4
                          text={`${item.length} x ${item.width} x ${item.height}`}
                          className="value"
                        />
                      </Grid>
                    )}
                    {item?.quantity && (
                      <Grid item xs={4}>
                        <H4 text="Pieces" />
                        <H4 text={item?.quantity || "-"} className="value" />
                      </Grid>
                    )}
                    {item?.description && (
                      <Grid item xs={12}>
                        <H4 text="Item Description" />
                        <H4 text={item?.description || "-"} className="value" />
                      </Grid>
                    )}
                  </Grid>
                </Accordion>
              </InnerAccordion>
            );
          })}
      </Accordion>
    </AccordionOuterBox>
  );
}

export default BulkOrderItemDetails;
