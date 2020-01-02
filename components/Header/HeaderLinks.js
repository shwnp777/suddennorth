/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { AssignmentInd, Chat } from "@material-ui/icons";
// import DeleteIcon from "@material-ui/icons/Delete";
// import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="About Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AssignmentInd}
          dropdownList={[
            <Link href="/portfolio">
              <a className={classes.dropdownLink}>Portfolio</a>
            </Link>,
            <Link href="/portfolio">
              <a className={classes.dropdownLink}>Our Team</a>
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      <Tooltip
          id="instagram-facebook"
          title="Get in Touch"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          href="/contact"
          color="transparent"
          className={classes.navLink}
        >
          <Chat className={classes.icons} /> Contact Us
        </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/suddennorth"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
