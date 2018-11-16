<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181116143648 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE coeff DROP FOREIGN KEY FK_A29F1C525E564AE2');
        $this->addSql('DROP INDEX IDX_A29F1C525E564AE2 ON coeff');
        $this->addSql('ALTER TABLE coeff ADD alias VARCHAR(150) NOT NULL, DROP alias_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE coeff ADD alias_id INT DEFAULT NULL, DROP alias');
        $this->addSql('ALTER TABLE coeff ADD CONSTRAINT FK_A29F1C525E564AE2 FOREIGN KEY (alias_id) REFERENCES level (id)');
        $this->addSql('CREATE INDEX IDX_A29F1C525E564AE2 ON coeff (alias_id)');
    }
}
